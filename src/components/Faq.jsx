import React from 'react'
import phone from '../assets/images/icons/phone.svg'
import message from '../assets/images/icons/message.svg'
import chevron1 from '../assets/images/icons/message.svg'
import chevron2 from '../assets/images/icons/message.svg'
import chevron3 from '../assets/images/icons/message.svg'
import chevron4 from '../assets/images/icons/message.svg'
import chevron5 from '../assets/images/icons/message.svg'

const Faq = () => {
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
              <div className="container">
                <div className="accordion-info">
                <h4 className="label">Is any of my personal information stored in the App?</h4>
                <div className="faq-dropdownTab-down">
                    <img className="dropdown-toggle" width="20" height="20" src={chevron1} alt="dropdownTab" />    
               </div>
            </div>
                <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
              </div>
              <div className="container">
                <div className="accordion-info">
                <h4 className="label">Is any of my personal information stored in the App?</h4>
                <div className="faq-dropdownTab-down">
                    <img width="20" height="20" src={chevron2} alt="dropdownTab" />

               </div>                </div>
                <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
              </div>
              <div className="container">
                <div className="accordion-info">
                <h4 className="label">Is any of my personal information stored in the App?</h4>
                <div className="faq-dropdownTab-down">
                    <img width="20" height="20" src={chevron3} alt="dropdownTab" />
                   
                   
               </div>                </div>
                <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
              </div>
              <div className="container">
                <div className="accordion-info">
                <h4 className="label">Is any of my personal information stored in the App?</h4>
                <div className="faq-dropdownTab-down">
                    <img width="20" height="20" src={chevron4} alt="dropdownTab" />
                   
               </div>               
             </div>
                <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
              </div>
              <div className="container">
                <div className="accordion-info">
                <h4 className="label">Is any of my personal information stored in the App?</h4>
                <div className="faq-dropdownTab-down">
                    <img width="20" height="20" src={chevron5} alt="dropdownTab" />
                   
                   
               </div>               
             </div>
                <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
              </div>
             
            </div>
            </div>
    </div>
</section>
  )
}

export default Faq