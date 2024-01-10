import React from 'react'
import './Partners.scss'
import partners from '../../constants/partners'

const Partners = () => {
  return (
    <div className="partner-card-container">
            {partners.map((partner) => (
              <div className="partner-card">
                <img
                  src={require(`../../${partner.logo}`)}
                  alt={partner.name}
                />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>
  )
}

export default Partners