import React, { useState, useRef, useEffect } from "react";
import "./Testimonials.scss";
import reviewData from "./data/testimonials";
import leftArrow from "../assets/chevron-left-solid.svg";
import rightArrow from "../assets/chevron-right-solid.svg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  //will show one testimonial at a time, based on index
  const review = reviewData[currentIndex];

  //updates index and opacity, this way item fades in with each click
  const handleClick = (index) => {
    setOpacity(0); 
    setTimeout(() => {
      setCurrentIndex(index);
      setOpacity(1); 
    }, 500); 
  };

  const renderDots = () => {
    return reviewData.map((item, index) => (
      <span
        key={index}
        className={`dot ${currentIndex === index ? "active" : ""}`}
        onClick={() => handleClick(index)}
      ></span>
    ));
  };

  return (
    <div className="testimonials">
      {reviewData?.length && (
        <>
          <div className="testimonial-btn">
            <button
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1
                )
              }
            >
              <img src={leftArrow} alt="Right Chevron" />
            </button>
          </div>
          <div className={`testimonial-item-container ${review.name}`}>
            <div style={{ opacity: opacity }} className="testimonial-item">
              <div className="content-wrapper">
                <h4>{review.name}</h4>
                <span className="hr-line"></span>
              </div>
              <p>{review.content}</p>
            </div>
            <div className="testimonial-dots">{renderDots()}</div>
          </div>
          <div className="testimonial-btn">
            <button
              onClick={() =>
                handleClick(
                  currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <img src={rightArrow} alt="Left Chevron" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
