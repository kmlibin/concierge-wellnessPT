import React, { useState, useEffect } from "react";

//styles
import "./Testimonials.scss";

//content
import reviewData from "./reviewData";

//react icons
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

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
  //auto scrolls on 6 seconds, but can stop if user hovers in the testimonials container
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleClick(
          currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1
        );
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

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
    <div
      className="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {reviewData?.length && (
        <>
          <div className="testimonial-btn-container">
            <button
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1
                )
              }
            >
              <BsChevronCompactLeft className="button-icon" />
            </button>
          </div>
          <div className={`testimonial-item-container ${review.name}`}>
            <div style={{ opacity: opacity }} className="testimonial-item">
              <div className="content-wrapper">
                <h4>{review.name}</h4>
                <span className="hr-line"></span>
              </div>
              <div className="center-content">
              <p>{review.content}</p>
              </div>
            </div>
            <div className="testimonial-dots">{renderDots()}</div>
          </div>
          <div className="testimonial-btn-container">
            <button
              onClick={() =>
                handleClick(
                  currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <BsChevronCompactRight className="button-icon" />
            </button>
          </div>
          <div className="responsive-buttons controls">
            <button
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1
                )
              }
            >
              <BsChevronCompactLeft className="button-icon" />
            </button>
            <button
              onClick={() =>
                handleClick(
                  currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <BsChevronCompactRight className="button-icon" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
