import React, { useState, useEffect } from 'react'
import phone from '../assets/images/icons/phone.svg'
import message from '../assets/images/icons/message.svg'
import chevron from '../assets/images/icons/chevron-down.svg'

const Faq = () => {

  const [faqItems, setFaqItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => response.json())
      .then(data => {
        setFaqItems(data);
        setLoading(false);
      })
      .catch(error => {
        setError("Det gick inte att hämta FAQ-data.");
        setLoading(false);
      });
  }, []); 

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <p>Laddar FAQ...</p>;
  if (error) return <p>{error}</p>;


  return (
    <section className="faq-section">
    <div className="faq-info">
        <h1 className="h1">Any questions? <br /> Check out the FAQs</h1>
        <p>Still have unanswered questions and need to get in touch?</p>
        <div className="contact-options">
            <div className="contact-box">
                <img width="28" height="28" src={phone} alt="phone" />
                <p>Still have questions?</p>
                <a href="#" id="phone">Contact us 
                </a>
            </div>
            <div className="contact-box">
                <img width="28" height="28" src={message} alt="message" />
                <p>Don’t like phone calls?</p>
                <a href="#" id="msg">Contact us
                </a>
            </div>
        </div>
    </div>
  
    <div className="faq-list">
        <div className="accordion-body">
            <div className="accordion">
            {faqItems.map((item, index) => (
            <div key={index} className="container">
              <div className="accordion-info">
                <h4 className="label">{item.question}</h4>
                <div
                  className="faq-dropdownTab-down"
                  onClick={() => toggleOpen(index)}
                >
                  <img
                    className="dropdown-toggle"
                    width="20"
                    height="20"
                    src={chevron}
                    alt="dropdown toggle"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                    }}
                  />
                </div>
              </div>
              {openIndex === index && (
                <div className="content">{item.answer}</div> 
              )}
            </div>
          ))}    
        </div>
      </div>
    </div>
</section>
  );
};

export default Faq