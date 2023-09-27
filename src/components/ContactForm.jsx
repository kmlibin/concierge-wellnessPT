import React, { useState, useRef } from "react";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

import Modal from "./Modal";

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    heading: "Success",
    message:
      "Thanks for your email. Christian will respond within the next 24 hours",
  });
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: "phone",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      errors["username"] = "*Please enter your name";
    }

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email";
    }

    if (formData.email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailPattern.test(formData.email);
      if (!isValidEmail) {
        formIsValid = false;
        errors["email"] = "*Please enter a valid email";
      }
    }

    if (!formData.phone) {
      formIsValid = false;
      errors["number"] = "*Please enter your phone number";
    }

    if (!formData.preferredContactMethod) {
      formIsValid = false;
      errors["contactMethod"] = "*Please make a selection";
    }

    if (!formData.message) {
      errors["message"] = "*Please provide information";
    }

    setFormErrors(errors);
    return formIsValid;
  };
  console.log(formErrors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            "template_m2bhs6m",
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then((result) => {
            console.log(result.text);
            setSubmissionStatus({
              heading: "Success",
              message:
                "Thanks for your email. Christian will respond within the next 24 hours",
            });

            setShowModal(true);
            setFormData({
              name: "",
              lastName: "",
              email: "",
              phone: "",
              preferredContactMethod: "phone",
              message: "",
            });
          });
      } catch (error) {
        console.log(error.text);
        setSubmissionStatus({
          heading: "Error",
          message:
            "Error sending email. Please try again later or email email@email directly",
        });
        setShowModal(true);
      }
    } else {
      console.log("form validation failed");
      setShowModal(true);
      setSubmissionStatus({
        heading: "Error",
        message: "Form Validation Failed",
      });
    }
  };
  return (
    <div className="contact-form" data-aos="fade-up" data-aos-duration="1000">
      <form onSubmit={handleSubmit} ref={form}>
        <h2>Let's Connect!</h2>
        <span className="hr-line"></span>
        <div className="name-lastname-container">
          <div className="name-input">
            <label htmlFor="name">
              Name:
              <input
                className={`${formErrors.username ? "red-border" : ""}`}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <div className="error-message">{formErrors.userName}</div>
          </div>
          <div className="lastname-input">
            <label htmlFor="lastname">
              Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div className="email-phone-container">
          <div className="email-input">
            <label htmlFor="email">
              Email:
              <input
                className={`${formErrors.email ? "red-border" : ""}`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="phone-input">
            <label htmlFor="phone">
              Phone:
              <input
                className={`${formErrors.number ? "red-border" : ""}`}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <div className="error-message">{formErrors.number}</div>
          </div>
        </div>
        <div className="select-input">
          <label htmlFor="preferredContactMethod">
            Preferred Contact:
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </label>
          <div className="error-message">{formErrors.contactMethod}</div>
        </div>

        <div className="message-container">
          <label htmlFor="message">
            Message <span className="regular-font">(max 500 characters)</span>:
            <textarea
              className={`${formErrors.message ? "red-border" : ""}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              required
            />
          </label>
          <div className="error-message">{formErrors.message}</div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      {showModal && (
        <Modal
          setIsOpen={setShowModal}
          submissionStatus={submissionStatus}
          setSubmissionStatus={setSubmissionStatus}
        />
      )}
    </div>
  );
};

export default ContactForm;
