import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { HelmetProvider } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <>
      <HelmetProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default App;
