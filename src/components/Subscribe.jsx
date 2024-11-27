import React, { useState } from "react";
import axios from "axios";
import notification from "../assets/images/icons/notification.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      return;
    }

    const requestData = {
      email: email,
    };
    try {
      const response = await axios.post(
        "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
        requestData
      );

      if (response.status === 200) {
        setStatus({ message: "Thank you for subscribing!", type: "success" });
        setEmail("");
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus({
          message: "Something went wrong. Please try again later.",
          type: "error",
        });

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      }
    } catch (error) {
      setStatus({
        message: "Network error. Please try again later.",
        type: "error",
      });
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <section className="subscribe">
      <img src={notification} alt="notification" />
      <h4 id="subscribe-title">
        Subscribe to our newsletter to stay informed about latest updates
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && (
        <p className={`status-message ${status.type}`}>{status.message}</p>
      )}
    </section>
  );
};

export default Subscribe;
