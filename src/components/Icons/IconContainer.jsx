import React from "react";
import './IconContainer.scss'

const IconContainer = ({icon, alt}) => {
  return (
    <div className="img-container">
      <img src={icon} alt={alt} title="icon from Freepik" />
    </div>
  );
};

export default IconContainer;
