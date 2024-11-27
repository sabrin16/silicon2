import React, { useState, useEffect } from "react";
import axios from "axios";
import quotes from "../assets/images/icons/quotes.svg";
import rating from "../assets/images/icons/rating.svg";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://win24-assignment.azurewebsites.net/api/testimonials")
      .then((response) => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setError("Kunde inte hämta testimonials");
        setLoading(false);
      });
  }, []);

  return (
    <section className="testimonials">
      <h2>Clients are Loving Our App</h2>

      {loading ? (
        <p>Loading testimonials...</p>
      ) : error ? (
        <p>{error}</p>
      ) : testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img
              width="48"
              height="48"
              src={testimonial.avatarUrl || "https://via.placeholder.com/48"}
              alt={testimonial.author || "Author"}
            />
            <img
              width="44"
              height="44"
              className="testimonial-item-quotes"
              src={quotes}
              alt="quotes"
            />
            <img width="88" height="16" src={rating} alt="rating" />
            <div className="author-info">
              <p className="author-name">{testimonial.author}</p>
              <p className="author-role">{testimonial.jobRole}</p>
            </div>
            <p>{testimonial.comment}</p> {/* Text från API:et */}
            {testimonial.extraText && <p>{testimonial.extraText}</p>}
          </div>
        ))
      ) : (
        <p>Loading testimonials...</p>
      )}
    </section>
  );
};

export default Testimonials;
