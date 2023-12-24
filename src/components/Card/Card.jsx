import React from "react";
import "./Card.scss";

const Card = ({ image, alt, heading, duration }) => {
  return (
    <div className="card-container">
      {/* <h3 style= {{marginBottom: "1.5rem", fontStyle: "italic", color: "rgb(17, 163, 213)"}}>{heading}</h3> */}
      <div
        className="process-info"
        data-aos="zoom-in-right"
        data-aos-duration={duration}
        data-aos-easing="ease-in-out"
      >
        <h3>{heading}</h3>
        <img src={image} loading="lazy" alt={alt}></img>

        <ul>
          <li>thing one is this long</li>
          <li>thing two is longer</li>
          <li>thing three is the longest</li>
        </ul>
        <p>Rhoncus dolor purus non enim praesent elementum facilisis leo.</p>
      </div>
    </div>
  );
};

export default Card;
