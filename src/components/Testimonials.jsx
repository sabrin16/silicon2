import React, { useState, useEffect } from 'react';
import axios from 'axios';
import quotes from '../assets/images/icons/quotes.svg';
import rating from '../assets/images/icons/rating.svg';
import designerPic from '../assets/images/icons/designerPic.svg';
import quotes1 from '../assets/images/icons/quotes1.svg';
import rating5 from '../assets/images/icons/rating5.svg';
import developerPic from '../assets/images/icons/developerPic.svg';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('https://win24-assignment.azurewebsites.net/api/testimonials')
          .then(response => {
            console.log(response.data); 
            setTestimonials(response.data);
          })
          .catch(error => {
            console.error('Error fetching testimonials:', error);
          });
      }, []); 

    return (
    <section className="testimonials">
      <h2>Clients are Loving Our App</h2>

        {testimonials.length > 0 ? ( 
        testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-item">

        <img width="44" height="44" className="testimonial-item-quotes" src={quotes} alt="quotes" />
        <img width="88" height="16" src={rating} alt="rating4" />
        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>       
        
        {testimonial.extraText && <p>{testimonial.extraText}</p>}

     <div className="author">
        <img width="48" height="48" src={designerPic} alt="designer" />       
        <div className="author-info">
          <p className="author-name">Fannie Summers</p>
          <p className="author-role">Designer</p>
        </div>       
      </div>

        <img width="44" height="44" className="testimonial-item-quotes" src={quotes1} alt="quotes" />
        <img width="88" height="16" src={rating5} alt="rating5" />
        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
        <p>{testimonial.text}</p> 

       <div className="author">
          <img width="48" height="48" src={developerPic} alt="developer" />
            <div className="author-info">
              <p className="author-name">{testimonial.name}</p>
              <p className="author-role">{testimonial.role}</p>
            </div>
          </div>
        </div>
        ))
      ) : (
        <p>Loading testimonials...</p>
      )}
    </section>
  );
};

export default Testimonials