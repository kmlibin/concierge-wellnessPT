import React from "react";

//libraries
import { Helmet } from "react-helmet-async";

//styles
import "./ContactScreen.scss";

//components
import ContactForm from "../Contact/ContactForm/ContactForm.jsx";

//content
import contactcontent from './contactcontent.js'


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
            <p>{contactcontent.blurb}</p>
          </div>
        </div>
        <ContactForm />
      </main>
    </>
  );
};

export default ContactScreen;
