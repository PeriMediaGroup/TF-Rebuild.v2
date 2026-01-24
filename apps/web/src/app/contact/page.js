"use client";
import { useState } from "react";
import "../../styles/sections/contact.scss";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSending, setIsSending] = useState(false);

async function handleSubmit(e) {
  e.preventDefault();

  const formEl = e.currentTarget; // keep a stable reference
  setStatus({ type: "", msg: "" });
  setIsSending(true);

  const fd = new FormData(formEl);
  const payload = {
    name: (fd.get("name") || "").toString().trim(),
    email: (fd.get("email") || "").toString().trim(),
    message: (fd.get("message") || "").toString().trim(),
  };

  if (!payload.name || !payload.email || !payload.message) {
    setIsSending(false);
    setStatus({ type: "error", msg: "Please fill out name, email, and message." });
    return;
  }

  try {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    }

    const res = await fetch(`${SUPABASE_URL}/functions/v1/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await res.json().catch(() => ({}))
      : { error: await res.text().catch(() => "") };

    if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);

    if (formEl instanceof HTMLFormElement) formEl.reset();
    setStatus({ type: "success", msg: `Message sent. Ref: ${data?.id || "ok"}` });
  } catch (err) {
    setStatus({ type: "error", msg: `Couldn’t send message. ${err?.message || ""}` });
  } finally {
    setIsSending(false);
  }
}


  return (
    <div className="tf-page__content contact-page">
      <h1>Contact Us</h1>

      <div className="tf-about__col tf-page__content--ghost">
        <p>Have a question? Found a bug? Want to yell at us? Go for it.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" />
          </label>

          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label>
            Message
            <textarea name="message" rows="5"></textarea>
          </label>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>

          {status.msg && (
            <p className={`contact-status contact-status--${status.type}`}>
              {status.msg}
            </p>
          )}
        </form>

        <div className="contact-alt">
          <p>📧 Email: <a href="mailto:support@triggerfeed.com">support@triggerfeed.com</a></p>
          <p>📞 Call/Text: <a href="tel:8643729393">864-372-9393</a></p>
        </div>
      </div>
    </div>
  );
}
