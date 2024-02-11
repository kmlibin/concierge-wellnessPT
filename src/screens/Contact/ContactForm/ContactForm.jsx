import React, { useState, useRef } from "react";

//styles
import "./ContactForm.scss";

//libraries
import emailjs from "@emailjs/browser";

//helpers
import validateForm from "./validateForm";

//components
import Modal from "../../../components/Modal/Modal.jsx";
import InputField from "./InputField";

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState();
  const [buttonStatus, setButtonStatus] = useState("Submit")
  const [submissionStatus, setSubmissionStatus] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: "phone",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //track inputs from form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //validate data, submit data to emailJS, reset form state
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonStatus("Loading...")
    const isValid = validateForm(formData, setFormErrors);
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
                "Thanks for your email. Christian will respond within the next 24 hours.",
            });
            setButtonStatus("Submit")
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
        setButtonStatus("Submit")
        setSubmissionStatus({
          heading: "Error",
          message:
            "Error sending email. Please try again later or email email@email directly",
        });
        setShowModal(true);
      }
    } else {
      setButtonStatus("Submit")
      setShowModal(true);
      setSubmissionStatus({
        heading: "Error",
        message:
          "Form Validation Failed. Please make sure information is correct or email email@email.com",
      });
    }
  };

  return (
    <div className="contact-form" data-aos="fade-up" data-aos-duration="1000">
      <form onSubmit={handleSubmit} ref={form}>
        <h2>Let's Connect!</h2>
        <hr className="hr-line" style={{borderBottom: "none", width:"40%"}}></hr>
        <div className="name-lastname-container">
          <InputField
            type="text"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.userName}
          />
          <InputField
            type="text"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={formErrors.lastName}
          />
        </div>
        <div className="email-phone-container">
          <InputField
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
          />
          <InputField
            type="tel"
            label="Phone"
            name="phone"
            value={formData.number}
            onChange={handleChange}
            error={formErrors.number}
          />
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
          <button type="submit">{buttonStatus}</button>
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
