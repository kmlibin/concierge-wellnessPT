import React from "react";
//rrd
import { Link } from "react-router-dom";
//styles
import "./NavBar.scss";

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
  ,
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
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavBar;
