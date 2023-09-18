import React from "react";
import "./HomeScreen.scss";
import Testimonials from '../components/Testimonials';
import logo from "../assets/logo.png";

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
      
    </main>
    <Testimonials />
    </>
  );
};

export default HomeScreen;
