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
    name: "Services",
    route: "",
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

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-list">
        <li className="dropdown-item nav-link">
          <Link to="/physicaltherapy">Physical Therapy</Link>
        </li>
        <li className="dropdown-item nav-link">
          <Link to="/wellnesscoaching">Wellness Coaching</Link>
        </li>
      </ul>
    </div>
  );
};

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
                <li className="contact-link" key={`link-${item.name}`}>
                  <Link
                    to={item.route}
                    className="blue-color"
                    style={{ fontWeight: "bold" }}
                    onClick={handleLinkClick}
                  >
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
    </nav>
  );
};

export default NavBar;
