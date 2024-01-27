import React from "react";

//libraries
import { Helmet } from "react-helmet-async";

//styles
import "./ServicesScreen.scss";

//images and content
import report from "../../assets/report.png";
import food from "../../assets/food.png";
import kettlebell from "../../assets/kettlebell.png";
import tippybird from "../../assets/tippybird.jpg";
import servicescontent from "./servicescontent.js";

//components
import ImageGallery from "./ImageGallery.jsx";
import CallButton from "../../components/DiscoveryButton/CallButton.jsx";



const ServicesScreen = () => {
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
            <div className="services-text">
              <h1>{servicescontent.header}</h1>
              <h4>{servicescontent.subheading}</h4>
              <span className="hr-line"></span>
              <p>{servicescontent.summary}</p>
              <div className="service-list">
                <ul>
                  {servicescontent.listOne.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                  {servicescontent.listTwo.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="hr-line"></span>

            {/* three icons at the bottom of services text */}

            <div className="services-icons">
              <div className="img-container">
                <img src={report} alt="health report" title="report icon from Freepik"/>
              </div>

              <div className="img-container">
                <img src={kettlebell} alt="kettlebell" title="kettlebell icon from Freepik" />
              </div>

              <div className="img-container">
                <img src={food} alt="health and wellness images" title="food pyramid icon from Freepik" />
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

export default ServicesScreen;
