import React from "react";
import "./ServicesScreen.scss";
import report from "../../assets/report.png";
import health from "../../assets/health.png";
import kettlebell from "../../assets/kettlebell.png";
import tippybird from '../../assets/tippybird.jpg'
import ImageGallery from "../../components/ImageGallery/ImageGallery.jsx";
import Imagegalltest from "../../components/ImageGallery/imagegalltest";
import Calendar from "../../components/GoogleCalendar/Calendar.jsx";
import content from "../../constants/content";
import { Helmet } from "react-helmet-async";

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
          <div className="image-container">
            <img className="main-photo" src={tippybird} alt="Dr. Wade helps a patient achieve proper form with a kettlebell exercise" />
            <div className="overlapping" 
         

            ></div>
          </div>
          <div className="services-main">
            <div className="services-text">
              <h1>{content.services.header}</h1>
              <h4>{content.services.subheading}</h4>
              <span className="hr-line"></span>
              <p>{content.services.summary}</p>
              <div className="service-list">
                <ul>
                  {content.services.listOne.map((service) => (
                    <li>{service}</li>
                  ))}
                  {content.services.listTwo.map((service) => (
                    <li>{service}</li>
                  ))}
                </ul>
                {/* <ul>
                {content.services.listTwo.map((service) => (
                    <li>{service}</li>
                  ))}
                </ul> */}
              </div>
            </div>
            <span className="hr-line"></span>
            <div className="services-icons">
              <div className="img-container">
                <img src={report} alt="report" />
              </div>
              {/* <img src = {snip1} /> */}
              <div className="img-container">
                <img src={kettlebell} alt="kettlebell" />
              </div>

              <div className="img-container">
                <img src={health} alt="health" />
              </div>
              {/* <div className="img-container">
          <img src = {yoga} />
          </div> */}
            </div>
          </div>
        </div>
      </main>
      <ImageGallery />
      <Imagegalltest />
      <Calendar />
    </>
  );
};

export default ServicesScreen;
