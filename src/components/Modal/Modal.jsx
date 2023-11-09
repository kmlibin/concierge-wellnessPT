import React from "react";
import "./Modal.scss";
import { IoClose } from "react-icons/io5";

const Modal = ({ setIsOpen, submissionStatus, setSubmissionStatus }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">{submissionStatus.heading}</h5>
          </div>
          <button
            className="top-close-btn"
            onClick={() => {setIsOpen(false); setSubmissionStatus(null)}}
          >
            <IoClose style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modal-content">{submissionStatus.message}</div>

          <div className="actions-container">
            <button
              className="close-btn"
              onClick={() => {setIsOpen(false); setSubmissionStatus(null)}}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
