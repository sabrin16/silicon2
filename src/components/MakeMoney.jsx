import React from "react";
import bxCheckCircle from "../assets/images/icons/bx-check-circle.svg";
import sendMoney from "../assets/images/icons/sendMoney.svg";
import iconr from "../assets/images/icons/icon-r.svg";

const MakeMoney = () => {
  const handleLearnMore = () => {
    alert("Learn more clicked!");
  };

  return (
    <section className="make-money">
      <div className="container up-part">
        <div className="make-money-info">
          <h1 className="h1">
            Make your money <br /> transfer simple and clear
          </h1>

          <ul className="features-list">
            <li>
              <img
                width="20"
                height="20"
                alt="Free banking transactions"
                src={bxCheckCircle}
              />

              <span>Banking transactions are free for you</span>
            </li>
            <li>
              <img
                width="20"
                height="20"
                alt="No monthly cash commission"
                src={bxCheckCircle}
              />
              <span>No monthly cash commission</span>
            </li>
            <li>
              <img
                width="20"
                height="20"
                alt="Manage payments online"
                src={bxCheckCircle}
              />
              <span>Manage payments and transactions online</span>
            </li>
          </ul>
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
        <div className="make-money-img">
          <img
            width="528"
            height="500"
            src={sendMoney}
            alt="Send money illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default MakeMoney;
