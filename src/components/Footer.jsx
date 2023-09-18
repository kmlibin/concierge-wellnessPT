import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Concierge Wellness &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
