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
    <div className="flex flex-col mt-10 mr-10 ml-10 p-10" id="contact-me">
      <h1 className="self-center mb-10 font-semibold">{text.contactMe}!</h1>
      {sentEmail ? (
        <h1 className="self-center mt-20">Thanks for contacting me :)</h1>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
            {text.contactSubject}:
            <input type="text" name="subject" placeholder={text.contactSubject} required />
            <p className="md:row-start-1 md:col-start-2 ">Email:</p>
            <input type="email" name="email" placeholder="email@gmail.com" required />
          </div>
          <div className="flex flex-col gap-4">
            {text.contactMessage}:
            <textarea
              name="body"
              rows="5"
              cols="30"
              placeholder={text.contactMessage}
              required
              className="resize-none"
            ></textarea>
          </div>
          <button type="submit" className="w-fit justify-self-center">
            Send
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactMe;
