import React from 'react'

//logo import
import logowithoutwords from '../../../assets/logowithoutwords.png';

const Hero = () => {
  return (
    <div className="logo-container">
    <img
      src={logowithoutwords}
      alt="Concierge Wellness logo"
      style={{ height: "auto", width: "50%" }}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    />
    <div
      className="brand-text"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <h1>
        <span className="blue-color">Physical Therapy </span>and{" "}
        <span className="blue-color">Wellness Coaching </span> <br />
        at your own convenience.
      </h1>
      <h4>In home services and telehealth available</h4>
    </div>
  </div>
  )
}

export default Hero