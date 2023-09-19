import React from "react";
import "./HomeScreen.scss";
import Testimonials from "../components/Testimonials";
import logo from "../assets/logo.png";
import fitness from "../assets/fitness.jpg";
import running from "../assets/running.jpg";
import moreweights from "../assets/moreweights.jpg";

const HomeScreen = () => {
  return (
    <>
      <main>
        <div className="logo-container">
          <div className="brand-text">
            <p>Dr.Christian Wade</p>
            <h2>
              <span className="blue-color">Lorem ipsum </span>dolor sit amet,{" "}
              <span className="blue-color">consectetuer </span>adipiscing elit.
            </h2>
            <h4>
              Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
            </h4>
          </div>

          <img src={logo} />
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
          <h4>
            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
          </h4>
          <p> Rhoncus | Dolor | Purus</p>
          <div className="process-info-container">
            <div className="process-info">
              <img src={running}></img>
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
            <div className="process-info">
              <img src={fitness}></img>
              <p>
                Rhoncus dolor purus non enim praesent elementum facilisis leo.
                Dolor sit amet consectetur adipiscing elit pellentesque.
                Venenatis cras sed felis eget. Elementum nisi quis eleifend
                quam.
              </p>
            </div>
            <div className="process-info">
              <img src={moreweights}></img>
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

        <div className="location">
          <h2>Location</h2>
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
      </main>
    </>
  );
};

export default HomeScreen;
