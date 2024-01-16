import React, { useState, useEffect } from "react";
import "./HomeScreen.scss";
import Testimonials from "./Testimonials/Testimonials.jsx";
import CallButton from "../../components/DiscoveryButton/CallButton.jsx";
// import logo2 from "../../assets/logo2.png";
import homecontent from './homecontent.js';
import logowithoutwords from "../../assets/logowithoutwords.png";
import Modal from "../../components/Modal/Modal.jsx";
import Card from "./Card/Card.jsx";
import gymweights from "../../assets/gymweights.jpg";
import twist from "../../assets/twist.jpg";
import livewell from "../../assets/livewell.jpg";
// import logosmall from '../../assets/logosmall.png'
import content from "../../constants/content.js";
import { Helmet } from "react-helmet-async";
import Map from "../../components/GoogleMap/Map.jsx";
import Partners from "../../components/Partners/Partners.jsx";

const HomeScreen = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    heading: "Welcome",
    message: "Book a FREE Discovery Call with Dr. Wade!",
    link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true",
  });
  const [isOpen, setIsOpen] = useState(false);

  //controls modal pop up
  useEffect(() => {
    //2 seconds
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 7000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Helmet>
        <title>Concierge Wellness Physical Therapy</title>
        <meta
          name="description"
          content="Offering personalized and expert physical therapy services with a focus on your well-being. Located in Colorado Springs, Colorado"
        />
      </Helmet>

      {/* hero section */}

      <main className="main-container">
        <div className="logo-container">
          <img
            src={logowithoutwords}
            alt="logo"
            style={{ height: "auto", width: "50%" }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <div
            className="brand-text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h1>
              <span className="blue-color">Physical Therapy </span>and{" "}
              <span className="blue-color">Wellness Coaching </span> <br />
              at your own convenience.
            </h1>
            <h4>In home services and telehealth available</h4>
          </div>
        </div>

        <Testimonials />

        {/* parallax 1 */}

        <div
          className="plx-image1"
          title="Weight Lifter"
          alt="Photo by Victor Freitas on Unsplash "
        ></div>

        {/* the process/cards section */}

        <div
          className="process-container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h2>
            <span className="blue-color">Movement</span> IS{" "}
            <span className="blue-color">Medicine</span>
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
              fostering long-term vitality and resilience`}
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

        <div
          className="location"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h2>Our Location</h2>
          <span className="hr-line"></span>
          <Map />
        </div>

        {/* partners section */}

        <div
          className="partners"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h2>Proud Partners</h2>
          <span className="hr-line"></span>
          <Partners />
        </div>

        {/* pop up  */}
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            submissionStatus={submissionStatus}
            setSubmissionStatus={setSubmissionStatus}
          />
        )}
      </main>
    </>
  );
};

export default HomeScreen;
