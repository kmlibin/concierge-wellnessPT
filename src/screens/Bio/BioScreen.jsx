import React from "react";

//libraries
import { Helmet } from "react-helmet-async";

//styles
import "./BioScreen.scss";

//content and images
import { about } from "./about";
import christian from '../../assets/christian.jpg'

const BioScreen = () => {
  return (
    <>
    <Helmet>
        <title>About Dr. Christian Wade | Holistic Physical Therapy</title>
        <meta
          name="description"
          content="Discover the passion of Dr. Christian Wade, practicing in Colorado Springs, who makes a positive impact through holistic and preventative physical therapy. Learn about his journey, commitment to empowering individuals, and guiding principles for a healthier, balanced life. "
        />
      </Helmet>
    <main className="bio" data-aos="fade-up" data-aos-duration="1000">
      <div className="bio-container">
        <div className="bio-image-container" data-aos="fade-right" data-aos-duration="1200">
          <img src={christian} alt="Dr. Christian Wade" />
        </div>
        <div className="bio-container-text">
          <h2>{about.header}</h2>
          <h4>{about.subheading}</h4>
          <h5>{about.credential}</h5>
          <span className="hr-line"></span>
          <p>{about.content}</p>
        </div>
      </div>
    </main>
    </>
  );
};

export default BioScreen;
