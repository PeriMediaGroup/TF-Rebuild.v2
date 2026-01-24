// supabase/functions/contact/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") return json(200, { ok: true });
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
    const SUPPORT_TO = Deno.env.get("SUPPORT_TO") || "support@triggerfeed.com";
    const RESEND_FROM = Deno.env.get("RESEND_FROM") || "TriggerFeed <onboarding@resend.dev>";

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { name, email, message, source } = await req.json();

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "").trim();
    const cleanMsg = String(message ?? "").trim();
    const cleanSource = String(source ?? "web").trim();

    if (!cleanName || !cleanEmail || !cleanMsg) {
      return json(400, { error: "Name, email, and message are required." });
    }

    // Grab auth user if present
    const authHeader = req.headers.get("Authorization") ?? "";
    let user_id: string | null = null;
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabase.auth.getUser(token);
      user_id = data?.user?.id ?? null;
    }

    const user_agent = req.headers.get("user-agent");
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("cf-connecting-ip") ??
      null;

    // Store message
    const { data: row, error: insertErr } = await supabase
      .from("contact_messages")
      .insert({
        name: cleanName,
        email: cleanEmail,
        message: cleanMsg,
        source: cleanSource,
        user_id,
        user_agent,
        ip,
      })
      .select("id, created_at")
      .single();

    if (insertErr) return json(500, { error: "DB insert failed", detail: insertErr.message });

    // Email via Resend
    const subject = `TriggerFeed Contact: ${cleanName}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4">
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${escapeHtml(cleanName)}</p>
        <p><b>Email:</b> ${escapeHtml(cleanEmail)}</p>
        <p><b>Source:</b> ${escapeHtml(cleanSource)}</p>
        <p><b>Message:</b></p>
        <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px">${escapeHtml(cleanMsg)}</pre>
        <p style="color:#666; font-size:12px">ID: ${row.id} | ${row.created_at}</p>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [SUPPORT_TO],
        reply_to: cleanEmail,
        subject,
        html,
      }),
    });

    if (!resendRes.ok) {
      const t = await resendRes.text().catch(() => "");
      // message is stored already, so return partial failure
      return json(502, { error: "Message saved but email failed", detail: t });
    }

    return json(200, { ok: true, id: row.id });
  } catch (err) {
    return json(500, { error: "Unexpected error", detail: String(err?.message ?? err) });
  }
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
