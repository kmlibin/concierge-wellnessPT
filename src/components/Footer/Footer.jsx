import React from "react";
//styles
import "./Footer.scss";
import footercontent from "./footercontent";
//libraries 
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  
  return (
    <footer>
      <h4 className="blue-color">{footercontent.business}</h4>
      <p>{footercontent.address1}</p>
      <p>{footercontent.address2}</p>
      <p>{footercontent.phone}</p>
      <br></br>
      <p>{footercontent.email}</p>

      <a
        href={footercontent.insta}
        target="_blank"
        rel="noopener noreferrer"
        style={{marginBottom: "2rem"}}
      >
        <BsInstagram className="instagram" />
      </a>

      <p>Concierge Wellness &copy; 2022</p>
    </footer>
  );
};

export default Footer;
