"use client";

import { useState } from "react";

export default function Abuse() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const email = form.get("email");
    const link = form.get("link");
    const details = form.get("details");

    const res = await fetch("/api/report-abuse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, link, details })
    });

    setLoading(false);

    if (res.ok) {
      alert("Report submitted. Thank you.");
      e.target.reset();
    } else {
      alert("There was an error submitting the report. Try again.");
    }
  }

  return (
    <section id="abuse" className="legal-section abuse-section">
      <h1>Report Abuse</h1>

      <p>
        If you see content that violates our Terms or CSAE Policy, you can report it here.
      </p>

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Your Email
            <input type="email" name="email" required />
          </label>
        </div>

        <div className="form-row">
          <label>
            Link to Content/Post <span className="report__required">(required)</span>
            <input name="link" placeholder="https://triggerfeed.com/posts/123" autoComplete="off" type="url" required />
          </label>
        </div><div className="form-row">
          <label>
            Offending Username (if known)
            <input
              type="text"
              name="offending_username"
              placeholder="@username"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Description <span className="report__required">(what makes this concerning)</span>
            <textarea name="details" rows="6" required></textarea>
          </label>
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Sending..." : "Submit Report"}
        </button>
      </form>

      <p className="abuse-note">
        For immediate danger or CSAE content, contact your local authorities and NCMEC.
      </p>
    </section>
  );
}
