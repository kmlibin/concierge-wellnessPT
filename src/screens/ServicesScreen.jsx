import React, {useState, useEffect} from "react";
import "./ServicesScreen.scss";
import services from "../assets/services.jpg";
import snip1 from "../assets/snip1.jpg";
import snip2 from "../assets/snip2.jpg";
import snip3 from "../assets/snip3.jpg";
import snip4 from "../assets/snip4.jpg";
import yoga from "../assets/yoga-pose.png";
import dumbbell from "../assets/dumbbell.png";
import bike from "../assets/stationary-bike.png";
import report from "../assets/report.png";

import chickenman from "../assets/chickenman.jpg";
import bands from "../assets/bands.jpg";
import weights from "../assets/weights.jpg";
import running from "../assets/running.jpg";
import fitness from "../assets/fitness.jpg";
import moreweights from "../assets/moreweights.jpg";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const ServicesScreen = () => {

  const images = [
    chickenman,
    chickenman,
    bands,
    weights,
    running,
    fitness,
    moreweights,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 5;

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const autoScroll = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(autoScroll, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  //determine images present in the array (in what order) based on index
  const visibleImages = [];
  for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
    const index = i % images.length;
    visibleImages.push(images[index]);
  }
  return (
    <>
    <main className="services">
      <div className="services-container">
      <div className="image-container">
        <img className="main-photo" src={services} />
        <div className="overlapping"></div>
      </div>
      <div className="services-main">
        <div className="services-text">
          <h2>Services</h2>
          <h4>Some Text Here About How Cool They Are</h4>
          <span className="hr-line"></span>
          <p>
            Aliquam id diam maecenas ultricies mi eget mauris. Eget egestas
            purus viverra accumsan in nisl. Elit scelerisque mauris pellentesque
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
            <img src={dumbbell} />
          </div>
          {/* <img src = {snip1} /> */}
          <div className="img-container">
            <img src={bike} />
          </div>

          <div className="img-container">
            <img src={report} />
          </div>
          {/* <div className="img-container">
          <img src = {yoga} />
          </div> */}
        </div>
      </div>
      </div>
     
    </main>
     <div className="image-gallery">
        <div className="image-list" >
          {visibleImages.map((image, index) => (
            <div className="image" >
              <img src={image} alt="Gallery" />
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={handlePrevClick}><BsChevronCompactLeft className="button-icon" /></button>
          <button onClick={handleNextClick}><BsChevronCompactRight className="button-icon"/></button>
        </div>
      </div>
      </>
  );
};

export default ServicesScreen;
