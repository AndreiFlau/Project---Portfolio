import { useRef, useState } from "react";
import useLangText from "../hooks/useLangText";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [sentEmail, setSentEmail] = useState(false);
  const text = useLangText();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS AT SENDING THIS EMAIL THROUGH EMAILJS!");
        },
        (error) => {
          console.log("FAILED AT SENDING THIS EMAIL THROUGH EMAILJS...", error.text);
        }
      );

    setSentEmail(true);
  };
  return (
    <>
      <h1>{text.contactMe}:</h1>

      {sentEmail ? (
        <h1>Thanks for contacting me :)</h1>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          {text.contactSubject}:
          <input type="text" name="subject" placeholder={text.contactSubject} />
          Email:
          <input type="email" name="email" placeholder="email@gmail.com" />
          {text.contactMessage}:<textarea name="body" rows="5" cols="30" placeholder={text.contactMessage}></textarea>
          <input type="submit" value="Send" />
        </form>
      )}
      <a href="https://github.com/AndreiFlau">
        <i className="devicon-github-original colored"></i>
      </a>
      <a href="https://www.linkedin.com/in/andrei-flausino-67399b294/">
        <i className="devicon-linkedin-plain"></i>
      </a>
    </>
  );
}

export default ContactMe;
