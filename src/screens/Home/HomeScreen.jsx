import React, { useState, useEffect } from "react";
import "./HomeScreen.scss";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import CallButton from "../../components/DiscoveryButton/CallButton.jsx";
// import logo2 from "../../assets/logo2.png";
import fitness from "../../assets/fitness.jpg";
import running from "../../assets/running.jpg";
import moreweights from "../../assets/moreweights.jpg";
import logowithoutwords from "../../assets/logowithoutwords.png";
import Modal from "../../components/Modal/Modal.jsx";
import Card from "../../components/Card/Card.jsx";
// import logosmall from '../../assets/logosmall.png'
import partners from "../../constants/partners.js";

const HomeScreen = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    heading: "Welcome",
    message: "Book a FREE Discovery Call with Dr. Wade!",
    link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //2 seconds
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <main className="main-container">
        <div className="logo-container">
          <img
            src={logowithoutwords}
            alt="logo"
            style={{ height: "auto", width: "50%" }}
          />
          <div
            className="brand-text"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1>
              <span className="blue-color">Physical Therapy </span>and{" "}
              <span className="blue-color">Wellness Coaching </span> <br />
              at your own convenience.
            </h1>
            <h4>In home services available</h4>
          </div>
          <CallButton />
        </div>

        <Testimonials />

        {/* parallax 1 */}

        <div
          className="plx-image1"
          title="Weight Lifter"
          alt="Photo by Victor Freitas on Unsplash "
        ></div>

        {/* the process/cards section */}

        <div className="process-container">
          <h2>
            The <span className="blue-color">Concierge</span> Process
          </h2>
          <span className="hr-line"></span>
          <h4>Dr. Wade and Concierge Wellness will elevate your well-being</h4>
          <p> Recovery | Performance | Wellness</p>
          <div className="process-info-container">
            <Card
              image={running}
              alt="runners"
              heading="Recovery"
              duration="800"
            />
            <Card
              image={fitness}
              alt="weight lifter"
              heading="Performance"
              duration="1000"
            />
            <Card
              image={moreweights}
              alt="someone using a weight machine"
              heading="Wellness"
              duration="1200"
            />
          </div>
        </div>

        <CallButton />

        {/* parallax 2 */}

        <div
          className="plx-image2"
          title="Weight Lifter"
          alt="Photo by Victor Freitas on Unsplash "
        ></div>

        {/* google map */}

        <div className="location">
          <h2>Our Location</h2>
          <span className="hr-line"></span>
          <div className="map-container">
          <iframe
          title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4687427470762!2d-104.68597982346914!3d38.70704587176526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87136a96367f2c61%3A0xcb5f3e14715d0214!2s1315%20Lords%20Hill%20Dr%2C%20Fountain%2C%20CO%2080817!5e0!3m2!1sen!2sus!4v1703458236397!5m2!1sen!2sus"
            width="80%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            style={{padding: "5rem", border: "none"}}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>

        <div className="partners">
          <h2>Proud Partners</h2>
          <span className="hr-line"></span>
          <div className="partner-card-container">
            {partners.map((partner) => (
              <div className="partner-card">
                <img
                  src={require(`../../${partner.logo}`)}
                  alt={partner.name}
                />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* pop up  */}

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          submissionStatus={submissionStatus}
          setSubmissionStatus={setSubmissionStatus}
        />
      )}
    </>
  );
};

export default HomeScreen;
