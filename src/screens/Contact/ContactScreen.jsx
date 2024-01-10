import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import "./ContactScreen.scss";
// import { TfiEmail } from "react-icons/tfi";
import content from "../../constants/content.js";
import { Helmet } from "react-helmet-async";

const ContactScreen = () => {
  return (
    <>
      <Helmet>
        <title>Contact Concierge Wellness PT | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to Concierge Wellness PT with any questions or inquiries. Use our contact form to get in touch, and we'll respond promptly to assist you"
        />
      </Helmet>
      <main className="contact">
        <div className="image-container"></div>
        <div className="contact-text">
          <div className="centered-text">
            <p>{content.contact.blurb}</p>
          </div>
        </div>
        <ContactForm />
      </main>
    </>
  );
};

export default ContactScreen;
