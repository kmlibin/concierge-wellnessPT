import React from "react";

//styles
import "./Partners.scss";

//content
import partners from "./partners";

const Partners = () => {
  return (

    <div
          className="partners"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h2>Proud Partners</h2>
          <span className="hr-line"></span>{" "}
          <p>
            Looking to work with like-minded small businesses to improve our
            community’s health and wellness. Email Concierge Wellness for
            inquiries.
          </p>
     
     
    <div className="partner-card-container">
      {partners.map((partner) => (
        <div className="partner-card" key={partner.name}>
          <a href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={require(`../../${partner.logo}`)} alt={partner.name} />
            {partner.name}
          </a>
        </div>
      ))}
    </div>   
    </div>
  );
};

export default Partners;
