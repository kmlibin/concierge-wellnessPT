import React from "react";

const CallButton = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <a
        className="contact-link call"
        target="_blank"
        rel="noopener noreferrer"
        href="https://calendly.com/conciergewellness/free-discovery-call"
      >
        Book FREE Discovery Call!
      </a>
    </div>
  );
};

export default CallButton;
