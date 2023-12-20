import React from "react";
import "./HomeScreen.scss";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import logo2 from "../../assets/logo2.png";
import fitness from "../../assets/fitness.jpg";
import running from "../../assets/running.jpg";
import moreweights from "../../assets/moreweights.jpg";
// import logosmall from '../../assets/logosmall.png'

const HomeScreen = () => {
  return (
    <>
      <main className="main-container">
        <div className="logo-container">
          <img
            src={logo2}
            alt="logo"
            style={{ height: "auto", width: "50%"}}
          />
          <div
            className="brand-text"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {/* <h3>Dr.Christian Wade</h3> */}
            {/* <h4>
              Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
            </h4> */}
            <h1>
              <span className="blue-color">Physical Therapy </span>and{" "}
              <span className="blue-color">Wellness Coaching </span> <br />
              at your own convenience.
            </h1>
            <h4>In home services available</h4>
            
          </div>
          <a className="contact-link call" target="blank" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true" >Book FREE Discovery Call!</a>
        </div>

        <Testimonials />
        <div
          className="plx-image1"
          title="Weight Lifter"
          alt="Photo by Victor Freitas on Unsplash "
        ></div>
        <div className="process-container">
          <h2>
            The <span className="blue-color">Concierge</span> Process
          </h2>
          <span className="hr-line"></span>
          <h4>
            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
          </h4>
          <p> Rhoncus | Dolor | Purus</p>
          <div className="process-info-container">
            <div
              className="process-info"
              data-aos="zoom-in-right"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <img src={running} loading="lazy" alt="running"></img>
              <h4>Heading</h4>
              <ul>
                <li>thing one is this long</li>
                <li>thing two is longer</li>
                <li>thing three is the longest</li>
              </ul>
              <p>
                Rhoncus dolor purus non enim praesent elementum facilisis leo.
              </p>
            </div>
            <div
              className="process-info"
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <img src={fitness} loading="lazy" alt="fitness"></img>
              <p>
                Rhoncus dolor purus non enim praesent elementum facilisis leo.
                Dolor sit amet consectetur adipiscing elit pellentesque.
                Venenatis cras sed felis eget. Elementum nisi quis eleifend
                quam.
              </p>
            </div>
            <div
              className="process-info"
              data-aos="zoom-in-left"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <img src={moreweights} loading="lazy" alt="weights"></img>
              <h4>Heading</h4>
              <ul>
                <li>thing one is this long</li>
                <li>thing two is longer</li>
                <li>thing three is the longest</li>
              </ul>

              <p>
                Rhoncus dolor purus non enim praesent elementum facilisis leo.
              </p>
            </div>
          </div>
        </div>

        <div
          className="plx-image2"
          title="Weight Lifter"
          alt="Photo by Victor Freitas on Unsplash "
        ></div>

        <div className="location">
          <h2>Our Location</h2>
          <span className="hr-line"></span>
          <iframe
            title="Google Map"
            src="https://storage.googleapis.com/maps-solutions-xk6pj5ttcx/locator-plus/7rd4/locator-plus.html"
            width="100%"
            height="500"
            style={{
              border: 0,
              boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.2)",
            }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="schedule" style={{ width: "100%", display: "flex", justifyContent: "center", margin: "1rem"}}>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true"
            title= "Google Scheduling Calendar"
            style={{ border: "0", width: "80%", height: "600px", frameborder: "0", background: "rgb(242,242,242)", borderRadius: "5px"}}
          ></iframe>"
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
