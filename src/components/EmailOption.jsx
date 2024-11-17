import React from "react";
import envelopeIcon from "../assets/images/icons/bx-envelope.svg";

const EmailOption = () => {
  return (
    <div className="option content">
      <div className="icon email-icon">
        <img src={envelopeIcon} alt="Email Icon" />
      </div>
      <div className="details text">
        <h3>Email us</h3>
        <p>
          Please feel free to drop us a line. We will respond as soon as
          possible.
        </p>
        <a href="#" className="link">
          Leave a message &rarr;
        </a>
      </div>
    </div>
  );
};
export default EmailOption;
