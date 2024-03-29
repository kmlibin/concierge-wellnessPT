import React from "react";

//styles
import "./Map.scss";

const Map = () => {
  return (
    <div
      className="location"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <h2>Our Location</h2>
      <span className="hr-line"></span>

      <div className="map-container">
        <iframe
          className="google-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4687427470762!2d-104.68597982346914!3d38.70704587176526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87136a96367f2c61%3A0xcb5f3e14715d0214!2s1315%20Lords%20Hill%20Dr%2C%20Fountain%2C%20CO%2080817!5e0!3m2!1sen!2sus!4v1703458236397!5m2!1sen!2sus"
          // width="100%"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
