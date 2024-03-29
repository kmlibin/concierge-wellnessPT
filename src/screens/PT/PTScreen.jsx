import React, { useState } from "react";

//libraries
import { Helmet } from "react-helmet-async";

//styles
import "./PTScreen.scss";

//images and content
import pt from "../../assets/pt.png";
import report from "../../assets/report.png";
import kettlebell from "../../assets/kettlebell.png";
import tippybird from "../../assets/tippybird.jpg";
import ptcontent from "./ptcontent.js";

//components
import ImageGallery from "./ImageGallery.jsx";
import CallButton from "../../components/DiscoveryButton/CallButton.jsx";
import IconContainer from "../../components/Icons/IconContainer.jsx";

const PTScreen = () => {
  const [icons] = useState([
    { icon: report, alt: "clipboard icon" },
    { icon: pt, alt: "stretching icon" },
    { icon: kettlebell, alt: "weight icon" },
  ]);
  return (
    <>
      <Helmet>
        <title>Services Provided by Concierge Wellness Physical Therapy</title>
        <meta
          name="description"
          content="Offering myofascial decompression, joint mobilization, in-home services, therapeautic massage, corrective exercise prescription, trigger point dry needling, spinal manipulation, wellness coaching, corporate wellness, ergonomic assessments, group fitness classes"
        />
      </Helmet>
      <main className="services">
        <div
          className="services-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* image and grey rectangle underneath */}
          <div className="image-container">
            <img
              className="main-photo"
              src={tippybird}
              alt="Dr. Wade helps a patient achieve proper form with a kettlebell exercise"
            />
            <div className="overlapping"></div>
          </div>

          {/* text of services screen */}
          <div className="services-main">
            <div className="services-background"
  
            >
              <div className="services-text">
                <h1>{ptcontent.header}</h1>
                <h4>{ptcontent.subheading}</h4>
                <span className="hr-line"></span>
                <p>{ptcontent.summary}</p>
                <div className="service-list">
                  <ul>
                    {ptcontent.listOne.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="hr-line"></span>

              {/* three icons at the bottom of services text */}

              <div className="services-icons">
                {icons.map((icon) => (
                  <IconContainer icon={icon.icon} alt={icon.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <ImageGallery />

      <div className="call-button-container">
        <CallButton />
      </div>
    </>
  );
};

export default PTScreen;
