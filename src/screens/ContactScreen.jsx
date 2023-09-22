import React from "react";
import ContactForm from "../components/ContactForm";
import "./ContactScreen.scss";

const ContactScreen = () => {
  return (
    <main className="contact">
      <div className="contact-text">
        <h2>Let's Connect</h2>
        <span className="hr-line"></span>
        <p>
          Please tell us about your problem in the form below and Dr. Wade will
          reach out and set up a time to connect!
        </p>
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactScreen;
