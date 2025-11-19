import { Resend } from "resend";

export async function POST(request) {
  try {
    const { email, link, details, offending_username } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "TriggerFeed Abuse Reports <no-reply@triggerfeed.com>",
      to: "abuse@triggerfeed.com",
      subject: "New Abuse Report Submitted",
      html: `
        <h2>New Abuse Report</h2>
        <p><strong>Reporter Email:</strong> ${email}</p>
        <p><strong>Offending Username:</strong> ${offending_username || "Not provided"}</p>
        <p><strong>Link:</strong> ${link}</p>
        <p><strong>Description:</strong></p>
        <pre>${details}</pre>
      `
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("Report Abuse Error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
