import React from "react";
//styles
import "./Footer.scss";
//libraries 
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h4>Concierge Wellness</h4>
      <p>1315 Lords Hill Dr</p>
      <p>Fountain, Colorado 80817</p>
      <p>YourEmail@email.com</p>
      <p>1234 567 8901</p>

      <a
        href="https://www.instagram.com/cw_pllc/"
        target="_blank"
        rel="noopener noreferrer"
        style={{marginBottom: "2rem"}}
      >
        <BsInstagram className="instagram" />
      </a>

      <p >Concierge Wellness &copy; 2022</p>
    </footer>
  );
};

export default Footer;
