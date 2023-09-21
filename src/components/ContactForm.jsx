import React, { useState } from "react";
import "./ContactForm.scss";
import { toHaveErrorMessage } from "@testing-library/jest-dom/matchers";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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

    setErrors( errors );
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm()
    console.log(formData);
  };

  console.log(errors.number)
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
           
            />
          </label>
          <div className="error-message">{errors.username}</div>
        </div>
        <div className="email-phone-container">
          <div className="email-input">
            <label htmlFor="email">
              Email:
              <input
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
          
              />
            </label>
            <div className="error-message">{errors.number}</div>
          </div>

          <div className="select-input">
            <label htmlFor="preferredContactMethod">
              Preferred Contact Method:
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
        </div>
        <div className="message-container">
          <label htmlFor="message">
            Message (max 500 characters):
            <textarea
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