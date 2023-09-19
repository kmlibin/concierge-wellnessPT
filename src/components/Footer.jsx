import React from "react";
import "./Footer.scss";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h5>Concierge Wellness</h5>
      <p>1315 Lords Hill Dr</p>
      <p>Fountain, Colorado 80817</p>
      <p>YourEmail@email.com</p>
      <p>1234 567 8901</p>

      <a
        href="https://www.instagram.com/cw_pllc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram className="instagram" />
      </a>

      <p>Concierge Wellness &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
