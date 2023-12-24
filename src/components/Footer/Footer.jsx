import React from "react";
//styles
import "./Footer.scss";
import content from "../../constants/content";
//libraries 
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h4>{content.footer.business}</h4>
      <p>{content.footer.address1}</p>
      <p>{content.footer.address2}</p>
      <p>{content.footer.email}</p>

      <a
        href={content.footer.insta}
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
