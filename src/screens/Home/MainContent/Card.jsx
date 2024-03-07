import React, { useState, useEffect } from "react";

//react icons
import { FaCaretDown } from "react-icons/fa";

//styles
import "./Card.scss";

const Card = ({ image, alt, heading, duration, bulletpoints, tagline }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  //on responsive screens, the animation messes with the accordion toggle. when toggled, the whole card just disappears. need
  //to check screen size before implementing animation. 
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setShouldAnimate(screenWidth > 900);
  }, []);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div
      className={`card-border ${isAccordionOpen ? "accordion-mode" : ""}`}
      {...(shouldAnimate ? { "data-aos": "zoom-in-right" } : {})}
      data-aos-duration={duration}
      data-aos-easing="ease-in-out"
    >
      <div className="card-container">
        <div className="process-info">
          <h3>{heading}</h3>
          <hr className="grey-hr-line"></hr>
          <img src={image} loading="lazy" alt={alt} className="img-container"></img>
          <div
            className={`accordion-indicator ${isAccordionOpen ? "open" : ""}`}
            onClick={toggleAccordion}
          >
            <FaCaretDown />
          </div>
          <div className={`card-text ${isAccordionOpen ? "open" : ""}`}>
            <ul>
              {bulletpoints.map((point, index) => (
                <li key={index}>{point}</li>
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
