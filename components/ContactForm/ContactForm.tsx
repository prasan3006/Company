import React, { useState } from "react";
import ContactFormStyle from "./ContactForm.style";

function ContactForm({ formStyle }) {
  const [result, setResult] = useState("gegrwgergher");
  const [showResult, setShowResult] = useState(false);

  const onFormSend = async (event: any) => {
    event.preventDefault();

    let name = (document.getElementById("contact-name") as HTMLInputElement)
      .value;
    let email = (document.getElementById("contact-email") as HTMLInputElement)
      .value;
    let phone = (document.getElementById("contact-phone") as HTMLInputElement)
      .value;
    let subject = (
      document.getElementById("contact-subject") as HTMLInputElement
    ).value;
    let message = (
      document.getElementById("contact-message") as HTMLInputElement
    ).value;

    let body = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    const response = await fetch("https://submit-form.com/EmnwAwYB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      setResult("succesfully submitted");
      setShowResult(true);
    } else {
      setResult("unable to submit form");
      setShowResult(true);
    }

    setTimeout(() => {
      setResult("");
      setShowResult(false);
      let contactForm = document.getElementById(
        "contact-form"
      ) as HTMLFormElement;
      contactForm.reset();
    }, 4000);
  };

  const CustomContactForm = () => {
    return (
      <form className={`${formStyle}`} id="contact-form">
        <div className="form-group">
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="contact-phone"
            type="text"
            name="phone"
            placeholder="Phone Number *"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="contact-message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button
            className="btn-default btn-large custom-submit"
            onClick={onFormSend}
          >
            Submit Now
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className={ContactFormStyle()}>
      {showResult ? (
        <div className="contact-result">{result}</div>
      ) : (
        <CustomContactForm />
      )}
    </div>
  );
}

export default ContactForm;
