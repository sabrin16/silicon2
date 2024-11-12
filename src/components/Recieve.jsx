import React from "react";
import contacts from "../assets/images/icons/contacts.svg";
import credit from "../assets/images/icons/credit.svg";
import bucket from "../assets/images/icons/bucket.svg";
import iconr from "../assets/images/icons/icon-r.svg";

const Recieve = () => {
  const handleLearnMore = () => {
    alert("Learn more clicked!");
  };
  return (
    <section className="recieve-container">
      <div className="recieve-img">
        <img src={contacts} alt="contact icon representing customer support" />
      </div>
      <div className="recieve-info">
        <h2>Receive payment from international bank details</h2>
        <div className="recieve-info-container">
          <div className="recieve-info-inner">
            <img
              width="60"
              height="60"
              src={credit}
              alt="Credit management icon"
            />
            <p>
              Manage your payments online. Mollis congue egestas egestas
              fermentum fames.
            </p>
          </div>
          <div className="recieve-info-inner">
            <img
              width="60"
              height="60"
              src={bucket}
              alt="Bucket icon for managing funds"
            />
            <p>
              A elementur and imperdiet enim, pretium etiam facilisi aenean quam
              mauris.
            </p>
          </div>
        </div>

        <button className="learn-more" onClick={handleLearnMore}>
          Learn More
          <img
            width="20"
            height="20"
            src={iconr}
            alt="Arrow icon for learn more"
          />
        </button>
      </div>
    </section>
  );
};

export default Recieve;
