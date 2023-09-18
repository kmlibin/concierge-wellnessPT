import React from 'react'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="navbar">
 <ul className="navbar-links">
        {["Home", "Meet Your PT", "My Story", "Services", "FAQ", "Request Free Phone Call"].map((item) => (
          item === "Request Free Phone Call" ? (
         
            <li className="contact-link" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          
          ) : (
           
            <li className="nav-link"key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          
          )
        ))}
      </ul>
  </nav>
  )
}

export default NavBar