import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleOK = () => {
    setSubmitted(false);
    reset();
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5173/api/contactform",
        data
      );

      if (res.status === 200) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.response?.status === 400
          ? "Felaktig data, vänligen kontrollera dina inmatningar."
          : error.response?.data?.message ||
              error.message ||
              "Något gick fel, försök igen senare."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="informationbox">
        <h1>Tack för ditt meddelande!</h1>
        <p>Vi återkommer till dig så snart vi kan.</p>
        <button className="btn-green" onClick={handleOK}>
          OK
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="headline">
        <h2>SEND US A MESSAGE</h2>
        <p>Fill out this form to get in touch with us.</p>
      </div>
      <div className="formBody">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "The name field is required" })}
          />
          <span>{errors.name && errors.name.message}</span>
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "The email field is required" })}
          />
          <span>{errors.email && errors.email.message}</span>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            {...register("message", {
              required: "The message field is required",
            })}
          ></textarea>
          <span>{errors.message && errors.message.message}</span>
        </div>

        {loading && (
          <div className="loading-container">
            <p>Laddar...</p>
            <div className="spinner"></div>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button
          type="submit"
          disabled={loading}
          aria-label={loading ? "Sending your message" : "Submit your message"}
        >
          {loading ? "Sending..." : "SUBMIT"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
