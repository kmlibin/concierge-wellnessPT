import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import "./ContactScreen.scss";
// import { TfiEmail } from "react-icons/tfi";
import content from "../../constants/content.js";

const ContactScreen = () => {
  return (
    <main className="contact">
      <div className="image-container"></div>
      <div className="contact-text" >
        <div className="centered-text">
          <p>
            {content.contact.blurb}
          </p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactScreen;
