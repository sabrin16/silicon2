import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import ContactForm from "./ContactForm";
import Breadcrumb from "./Breadcrumb";
import mapIcon from "../assets/images/icons/bx-map.svg";
import phoneIcon from "../assets/images/icons/bx-phone-call.svg";
import timeFive from "../assets/images/icons/bx-time-five.svg";
import Nav from "./Nav";
import CareersOption from "./CareersOption";
import EmailOption from "./EmailOption";
import useTitle from "./hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us");
  return (
    <div>
      <Nav />
      <section className="contact-us-section">
        <div className="container">
          <Breadcrumb />
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-layout">
            <div className="contact-options">
              <EmailOption />
              <CareersOption />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="medical-centers">
        <div className="container address-content">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.012529648301!2d-122.4058448!3d37.7366401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFwU29sZGVyLCBMb2NhdGlvbiA3MQ!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="medical-info">
            <div className="center">
              <h3>Medical Center 1</h3>
              <ul>
                <li className="line">
                  <img src={mapIcon} alt="" />
                  4517 Washington Ave. Manchester, Kentucky 39495
                </li>
                <li className="line">
                  <img src={phoneIcon} alt="" />
                  (406) 555-0120
                </li>
                <li className="line">
                  <div>
                    <img src={timeFive} alt="" />
                  </div>
                  <div>
                    <strong>Mon – Fri:</strong> 9:00 am – 22:00 pm
                    <br />
                    <strong>Sat – Sun:</strong> 9:00 am – 20:00 pm
                  </div>
                </li>
              </ul>
            </div>
            <div className="center">
              <h3>Medical Center 2</h3>
              <ul>
                <li className="line">
                  <img src={mapIcon} alt="" />
                  Washington Ave. Manchester, Kentucky 39495
                </li>
                <li className="line">
                  <img src={phoneIcon} alt="" />
                  (406) 555-0123
                </li>
                <li className="line">
                  <img src={timeFive} alt="" />
                  <div>
                    <strong>Mon – Fri:</strong> 9:00 am – 22:00 pm
                    <br />
                    <strong>Sat – Sun:</strong> 9:00 am – 20:00 pm
                  </div>
                </li>
              </ul>
            </div>
            <SocialMediaLinks />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
