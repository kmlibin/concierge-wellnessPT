import React from "react";
import "./BioScreen.scss";
import chickenman from "../../assets/chickenman.jpg";
import content from "../../constants/content";
const BioScreen = () => {
  return (
    <main className="bio" data-aos="fade-up" data-aos-duration="1000">
      <div className="bio-container">
        <div className="bio-image-container">
          <img src={chickenman} alt="chickenman" />
        </div>
        <div className="bio-container-text">
          <h2>{content.about.header}</h2>
          <h4>{content.about.subheading}</h4>
          <h5>{content.about.credential}</h5>
          <span className="hr-line"></span>
          <p>{content.about.content}</p>
        </div>
      </div>
    </main>
  );
};

export default BioScreen;
