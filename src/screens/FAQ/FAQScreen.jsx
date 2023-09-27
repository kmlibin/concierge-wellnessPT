import React from "react";
import { Link } from "react-router-dom";

//styles
import "./FAQScreen.scss";

//libraries
import { TfiEmail } from "react-icons/tfi";

const FAQScreen = () => {
  return (
    <main className="faq">
      <div className="faq-title" data-aos="fade-up" data-aos-duration="1000">
        <h1>FAQs</h1>
        <span className="hr-line"></span>
      </div>
      <div className="faq-container" data-aos="fade-up" data-aos-duration="1000">
        <div className="faq-text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lacus sed turpis tincidunt id. Vel quam elementum pulvinar etiam non
            quam lacus. Mattis vulputate enim nulla aliquet porttitor lacus
            luctus accumsan. Faucibus nisl tincidunt eget nullam non. Aliquam id
            diam maecenas ultricies mi eget mauris.{" "}
          </p>
        </div>
        <div className="faq-text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lacus sed turpis tincidunt id. Vel quam elementum pulvinar etiam non
            quam lacus. Mattis vulputate enim nulla aliquet porttitor lacus
            luctus accumsan. Faucibus nisl tincidunt eget nullam non. Aliquam id
            diam maecenas ultricies mi eget mauris.{" "}
          </p>
        </div>
        <div className="faq-text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lacus sed turpis tincidunt id. Vel quam elementum pulvinar etiam non
            quam lacus. Mattis vulputate enim nulla aliquet porttitor lacus
            luctus accumsan. Faucibus nisl tincidunt eget nullam non. Aliquam id
            diam maecenas ultricies mi eget mauris.{" "}
          </p>
        </div>
        <div className="faq-text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lacus sed turpis tincidunt id. Vel quam elementum pulvinar etiam non
            quam lacus. Mattis vulputate enim nulla aliquet porttitor lacus
            luctus accumsan. Faucibus nisl tincidunt eget nullam non. Aliquam id
            diam maecenas ultricies mi eget mauris.{" "}
          </p>
        </div>
        <div className="faq-text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lacus sed turpis tincidunt id. Vel quam elementum pulvinar etiam non
            quam lacus. Mattis vulputate enim nulla aliquet porttitor lacus
            luctus accumsan. Faucibus nisl tincidunt eget nullam non. Aliquam id
            diam maecenas ultricies mi eget mauris.{" "}
          </p>
        </div>
      </div>
      <div className="faq-questions-container">
        <div className="faq-content" >
        <div className="icon-container">
            <TfiEmail  className="icon"/>
         </div>
          <p>
            <span className="bold">Still don't have the answers you're looking for?</span> Submit a question on our <Link to="/contact">Contact</Link> page,
            or email Concierge Wellness at email@email.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default FAQScreen;
