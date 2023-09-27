import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
