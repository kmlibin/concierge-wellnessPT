import React, { useState } from "react";
import "./ContactForm.scss";
import { toHaveErrorMessage } from "@testing-library/jest-dom/matchers";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: "phone",
    message: "",
  });
  const [errors, setErrors] = useState({});

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

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    console.log(formData);
  };

  console.log(errors.number);
  return (
    <div className="contact-form" data-aos="fade-up"
    data-aos-duration="1000">
      <form onSubmit={handleSubmit}>
        <h2>Let's Connect!</h2>
        <span className="hr-line"></span>
        <div className="name-lastname-container">
          <div className="name-input">
            <label htmlFor="name">
              Name:
              <input
                className={`${errors.username ? "red-border" : ""}`}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
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
                className={`${errors.email ? "red-border" : ""}`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <div className="error-message">{errors.email}</div>
          </div>

          <div className="phone-input">
            <label htmlFor="phone">
              Phone:
              <input
                className={`${errors.number ? "red-border" : ""}`}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <div className="error-message">{errors.number}</div>
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
          <div className="error-message">{errors.contactMethod}</div>
        </div>

        <div className="message-container">
          <label htmlFor="message">
            Message <span className="regular-font">(max 500 characters)</span>:
            <textarea
              className={`${errors.message ? "red-border" : ""}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              required
            />
          </label>
          <div className="error-message">{errors.message}</div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
