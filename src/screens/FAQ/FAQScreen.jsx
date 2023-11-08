import React from "react";
import { Link } from "react-router-dom";

import faqData from "./faqData";

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
      <div
        className="faq-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {faqData.map((faq) => (
          <div className="faq-text">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="faq-questions-container">
        <div className="faq-content">
          <div className="icon-container">
            <TfiEmail className="icon" />
          </div>
          <p>
            <span className="bold">
              Still don't have the answers you're looking for?
            </span>{" "}
            Submit a question on our <Link to="/contact">Contact</Link> page, or
            email Concierge Wellness at email@email.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default FAQScreen;
