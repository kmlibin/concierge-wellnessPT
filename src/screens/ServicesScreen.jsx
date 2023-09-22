import React from "react";
import "./ServicesScreen.scss";
import services from "../assets/services.jpg";
import snip1 from '../assets/snip1.jpg';
import snip2 from '../assets/snip2.jpg';
import snip3 from '../assets/snip3.jpg';
import snip4 from '../assets/snip4.jpg';
import yoga from '../assets/yoga-pose.png';
import dumbbell from '../assets/dumbbell.png';
import bike from '../assets/stationary-bike.png';
import report from '../assets/report.png';
const ServicesScreen = () => {
  return (
    <main className="services">
      <div className="overlapping"></div>
      <img src={services} />
      <div className="services-main">
        <div className="services-text">
        <h2>Services</h2>
        <h4>Some Text Here About How Cool They Are</h4>
        <span className="hr-line"></span>
        <p>
          Aliquam id diam maecenas ultricies mi eget mauris. Eget egestas purus
          viverra accumsan in nisl. Elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique.
        </p>
        <div className="service-list">
        <ul>
          <li>item 1 goes here</li>
          <li>item 2</li>
          <li>item 3 is cool</li>
          <li>item 4 says a lot more</li>
          <li>item 5</li>
        </ul>
        <ul>
          <li>item 1 goes here</li>
          <li>item 2</li>
          <li>item 3 is cool</li>
          <li>item 4 says a lot more</li>
          <li>item 5</li>
        </ul>
        </div>
        </div>
        <span className="hr-line"></span>
        <div className="services-icons">
          <div className="img-container">
          <img src = {dumbbell} />
          </div>
          {/* <img src = {snip1} /> */}
          <div className="img-container">
          <img src = {bike} />
          </div>
          
          <div className="img-container">
          <img src = {report} />
          </div>
          {/* <div className="img-container">
          <img src = {yoga} />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default ServicesScreen;
