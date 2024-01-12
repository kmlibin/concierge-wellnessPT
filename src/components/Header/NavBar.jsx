import React, { useState } from "react";
//rrd
import { Link } from "react-router-dom";
//styles
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import logosmall from "../../assets/logosmall.png";
//routes for the links
const navRoutes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Meet Your PT",
    route: "/about",
  },
  {
    name: "My Story",
    route: "/mystory",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "FAQ",
    route: "/faq",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logosmall} alt="Concierge Wellness Logo" as="image" />
        </Link>
      </div>
      <ul className="navbar-links">
        {navRoutes.map((item) =>
          item.name === "Contact" ? (
            <li key={`link-${item.name}`}>
              <Link className="contact-link nav-contact-link" to={item.route}>
                {item.name}
              </Link>
            </li>
          ) : (
            <li className="nav-link" key={`link-${item.name}`}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
      <div className="navbar-menu">
        <HiMenuAlt4 onClick={handleToggle} />

        {toggle && (
          <div
            className="navbar-menu-content"
            data-aos="fade-in-right"
            data-aos-duration="1000"
          >
            <HiX onClick={handleToggle} />

            <ul>
              {navRoutes.map((item) =>
                item.name === "Contact" ? (
                  <li className="contact-link" key={`link-${item.name}`}>
                    <Link to={item.route} className="blue-color" onClick={handleLinkClick}>
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-link" key={`link-${item.name}`}>
                    <Link to={item.route} onClick={handleLinkClick}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
