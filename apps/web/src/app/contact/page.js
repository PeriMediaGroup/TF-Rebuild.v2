import "../../styles/sections/contact.scss"

export default function ContactPage() {
  return (
    <div className="tf-page__content contact-page">
        <h1>Contact Us</h1>
      <div className="tf-about__col tf-page__content--ghost">

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

        <div className="contact-alt">
          <p>📧 Email: <a href="mailto:support@triggerfeed.com">support@triggerfeed.com</a></p>
          <p>📞 Call/Text: <a href="tel:8643729393">864-372-9393</a></p>
        </div>
      </div>
    </div>
  );
}
