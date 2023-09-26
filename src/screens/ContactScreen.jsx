import React from "react";
import ContactForm from "../components/ContactForm";
import "./ContactScreen.scss";
import { TfiEmail } from "react-icons/tfi";
import chickenman from "../assets/chickenman.jpg";

const ContactScreen = () => {
  return (
    <main className="contact">
      <div className="image-container"></div>
      <div className="contact-text" >
        <div className="centered-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            sed turpis tincidunt id. Vel quam elementum pulvinar etiam non quam
            lacus. Mattis vulputate enim nulla aliquet porttitor lacus luctus
            accumsan. Faucibus nisl tincidunt eget nullam non.
          </p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactScreen;
