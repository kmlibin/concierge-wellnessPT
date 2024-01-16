import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./Card.scss";

const Card = ({ image, alt, heading, duration, bulletpoints, tagline }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setShouldAnimate(screenWidth > 900); 
  }, []);


  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };



  return (
    <div
      className={`card-border ${isAccordionOpen ? "accordion-mode" : ""}`}
      data-aos={shouldAnimate ? "zoom-in-right" : ""}
      data-aos-duration={duration}
      data-aos-easing="ease-in-out"
    >
      <div className="card-container">
        <div className="process-info">
          <h3>{heading}</h3>
          <hr className="grey-hr-line"></hr>
          <img src={image} loading="lazy" alt={alt}></img>
          <div
            className={`accordion-indicator ${isAccordionOpen ? "open" : ""}`}
            onClick={toggleAccordion}
          >
            <FaCaretDown />
          </div>
          <div className={`card-text ${isAccordionOpen ? "open" : ""}`}>
            <ul>
              {bulletpoints.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <hr className="hr-line"></hr>
            <p>{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
