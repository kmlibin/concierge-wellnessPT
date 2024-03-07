import React from "react";

//content and images
import homecontent from "../homecontent.js";
import gymweights from "../../PT/GalleryPhotos/gymweights.jpg";
import twist from "../../../assets/twist.jpg";
import livewell from "../../../assets/livewell.jpg";

//components
import Card from "./Card.jsx";

const MainContent = () => {
  return (
    <div
      className="process-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <h2>
        <span className="blue-color">MOVEMENT</span> IS{" "}
        <span className="blue-color">MEDICINE</span>
      </h2>
      <span className="hr-line"></span>
      <h4>Dr. Wade and Concierge Wellness will elevate your well-being</h4>
      <p> Recovery | Performance | Wellness</p>
      <div className="process-info-container">
        <Card
          image={twist}
          alt="A man using a foam roller"
          heading="Recovery"
          duration="800"
          bulletpoints={homecontent.home.bulletpointsOne}
          tagline={`Whether you're overcoming an injury or seeking post-operative care, 
    our expert guidance will help you regain strength and flexibility, ensuring a swift and effective recovery.`}
        />
        <Card
          image={gymweights}
          alt="Dr. Wade helps a patient with a deadlift"
          heading="Performance"
          duration="1000"
          bulletpoints={homecontent.home.bulletpointsTwo}
          tagline={` Tailored to your unique goals, our programs enhance endurance, optimize movement mechanics, and empower you to achieve peak performance.`}
        />
        <Card
          image={livewell}
          alt="Acrabble tiles that say live well"
          heading="Wellness"
          duration="1200"
          bulletpoints={homecontent.home.bulletpointsThree}
          tagline={` Our holistic approach integrates physical therapy and wellness coaching to promote a balanced and healthy lifestyle, 
    fostering long-term vitality and resilience.`}
        />
      </div>
    </div>
  );
};

export default MainContent;
