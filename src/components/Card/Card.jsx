import React from "react";
import "./Card.scss";

const Card = ({ image, alt, heading, duration, bulletpoints }) => {
  return (
    <div
      className="card-border"
      data-aos="zoom-in-right"
      data-aos-duration={duration}
      data-aos-easing="ease-in-out"
    >
      <div className="card-container">
        <div className="process-info">
          <h3>{heading}</h3>
          <hr className="grey-hr-line"></hr>
          <img src={image} loading="lazy" alt={alt}></img>
          <div className="card-text">
            <ul>
              {bulletpoints.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
