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
    route: "/meet",
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
  }
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logosmall} alt="logo" />
      </div>
      <ul className="navbar-links">
        {navRoutes.map((item) =>
          item.name === "Contact" ? (
            <li className="contact-link" key={`link-${item.name}`}>
              <Link to={item.route}>{item.name}</Link>
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
                    <Link to={item.route}>{item.name}</Link>
                  </li>
                ) : (
                  <li className="nav-link" key={`link-${item.name}`}>
                    <Link to={item.route}>{item.name}</Link>
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
