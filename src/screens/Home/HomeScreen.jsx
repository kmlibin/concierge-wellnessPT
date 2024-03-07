import React, { useState, useEffect } from "react";

//libraries
import { Helmet } from "react-helmet-async";

//styles
import "./HomeScreen.scss";

//components
import Testimonials from "./Testimonials/Testimonials.jsx";
import CallButton from "../../components/DiscoveryButton/CallButton.jsx";
import Map from "../../components/GoogleMap/Map.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import Hero from "./Hero/Hero.jsx";
import MainContent from "./MainContent/MainContent.jsx";

const HomeScreen = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    heading: "Welcome",
    message: "Book a FREE Discovery Call with Dr. Wade!",
    link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true",
  });
  const [isOpen, setIsOpen] = useState(false);

  //controls modal pop up
  useEffect(() => {
    //10 seconds
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
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

      <main className="main-container">
        {/* hero section */}
        <Hero />

        {/* testimonial section */}
        <Testimonials />

        {/* parallax 1, works on iOS as well */}

        <div
          class="parallax-fixed-bg"
          title="Photo by Victor Freitas on Unsplash "
          alt="Weight Lifter"
        >
          <div class="parallax-wrap">
            <div class="parallax"></div>
          </div>
        </div>

        {/* the process/cards section */}
        <MainContent />

        {/* call button */}
        <CallButton />

        {/* parallax 2 */}
        <div
          class="parallax-fixed-bg parallax-margin"
          title="Photo by Kelly Sikkema on Unsplash "
          alt="Fitness Bands"
        >
          <div class="parallax-wrap">
            <div class="parallax2"></div>
          </div>
        </div>

        {/* google map */}
        <Map />

        {/* partners section */}
        <Partners />

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
