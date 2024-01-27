import React from "react";

//styles
import "./Partners.scss";

//content
import partners from "../../constants/partners";

const Partners = () => {
  return (
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
  );
};

export default Partners;
