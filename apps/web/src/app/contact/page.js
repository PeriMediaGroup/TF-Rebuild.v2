import "../../styles/sections/contact.scss"

export default function ContactPage() {
  return (
    <div className="tf-page__content contact-page">
      <h1>Contact Us</h1>

      <p>Have a question? Found a bug? Want to yell at us? Go for it.</p>

      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Message
          <textarea name="message" rows="5"></textarea>
        </label>

        <button type="submit">Send</button>
      </form>

      <p>
        Or email us directly at: <strong>support@triggerfeed.com</strong>
      </p>
    </div>
  );
}
