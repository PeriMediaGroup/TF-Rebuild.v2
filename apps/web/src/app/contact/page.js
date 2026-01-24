"use client";
import { useState } from "react";
import "../../styles/sections/contact.scss";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setIsSending(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setIsSending(false);
      setStatus({ type: "error", msg: "Please fill out name, email, and message." });
      return;
    }

    try {
      // TODO: point this to your actual handler (Edge Function / API route / etc.)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      e.currentTarget.reset();
      setStatus({ type: "success", msg: "Message sent. If we like you, we’ll reply." });
    } catch (err) {
      setStatus({
        type: "error",
        msg: `Couldn’t send message. ${err?.message || "Try again later."}`,
      });
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
