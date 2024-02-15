import React, { useState } from "react";
import "./Coaching.scss";
import mariana from "../../assets/marianamedvedeva.jpg";
import wellnesscontent from "./wellnesscontent";
import CallButton from "../../components/DiscoveryButton/CallButton";
import { Helmet } from "react-helmet-async";
import jeremy from "../../assets/jeremythomas.jpg";
import food from "../../assets/food.png";
import report from "../../assets/report.png";
import yoga from "../../assets/yoga.png";
import IconContainer from "../../components/Icons/IconContainer";

const CoachingScreen = () => {
  const [icons] = useState([
    { icon: report, alt: "clipboard icon" },
    { icon: food, alt: "healthy plate icon" },
    { icon: yoga, alt: "mindfulness icon" },
  ]);
  return (
    <>
      <Helmet>
        <title>
          Wellness Coaching Services Provided by Concierge Wellness Physical
          Therapy, Colorado Springs and Fountain
        </title>
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
              className="main-photo two-images"
              src={mariana}
              alt="Healthy Food"
            />{" "}
            <img
              className="main-photo two-images second-image"
              src={jeremy}
              alt="A rock cairn"
            />
            <div className="blue-overlapping"></div>
          </div>

          {/* text of services screen */}
          <div className="services-main">
            <div className="services-background">
              <div className="services-text">
                <h1>{wellnesscontent.header}</h1>
                <h4>{wellnesscontent.subheading}</h4>

                <span className="hr-line"></span>
                <p>{wellnesscontent.summary}</p>
                <div className="service-list">
                  <ul>
                    {wellnesscontent.listOne.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
                <p>* Corporate Wellness Programs Available</p>
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

      <div className="call-button-container">
        <CallButton />
      </div>
    </>
  );
};

export default CoachingScreen;
