import React, { useState } from "react";

//rrd
import { Link } from "react-router-dom";

//styles
import "./NavBar.scss";

//react icons
import { HiMenuAlt4, HiArrowLeft } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

//images
import logosmall from "../../assets/logosmall.png";

//components
import DropdownMenu from "./DropDown";

//routes for the links
const navRoutes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Meet The Team",
    route: "/about",
  },
  {
    name: "Services",
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
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };
  const handleServicesClick = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
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
          ) : item.name === "Services" ? (
            <li key={`link-${item.name}`} className="services-link">
              <div className="">
                <Link href="#" className="service-container">
                  Services
                  <IoIosArrowDown size={18} className="caret" />
                </Link>
              </div>
              <DropdownMenu />
            </li>
          ) : (
            <li className="nav-link" key={`link-${item.name}`}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
      <div className="navbar-menu">
        <HiMenuAlt4 className="open-nav" onClick={handleToggle} />
      </div>

      {/* responsive nav */}
      {toggle && (
        <div
          className="navbar-menu-content"
          data-aos="fade-in-right"
          data-aos-duration="500"
        >
          {toggle ? (
            <HiArrowLeft className="close-nav" onClick={handleToggle} />
          ) : null}

          <ul>
            {navRoutes.map((item) =>
              item.name === "Contact" ? (
                <li
                  className="contact-link resp-link"
                  key={`link-${item.name}`}
                >
                  <Link
                    to={item.route}
                    className="blue-color"
                    style={{ fontWeight: "bold" }}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : item.name === "Services" ? (
                <li
                  key={`link-${item.name}`}
                  onClick={handleServicesClick}
                  className="resp-link"
                >
                  <div className="resp-dropdown">
                    <Link href="" className="service-container">
                      Services
                      <IoIosArrowDown
                        size={18}
                        className={`caret ${
                          servicesDropdownOpen ? "open" : "closed"
                        }`}
                      />
                    </Link>
                  </div>
                  {servicesDropdownOpen && (
                    <DropdownMenu toggle={toggle} handleLinkClick={handleLinkClick} />
                  )}
                </li>
              ) : (
                <li className="resp-link" key={`link-${item.name}`}>
                  <Link to={item.route} onClick={handleLinkClick}>
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
