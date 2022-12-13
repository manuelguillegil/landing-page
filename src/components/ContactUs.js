import React from 'react';
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTelegram } from "react-icons/tb";
import { BsPhoneVibrate } from "react-icons/bs";
import '../styles/contact-us.scss'
import '../styles/fonts.scss'

const ContactUs = () => {
  return (
  <div className="contact-us-section">
    <div className="contact-us-text">
      <h3 className="contact-us-title section-title">Contact Us</h3>
      <p className="contact-us-subtitle section-subtitle">We would love to hear from you!</p>
    </div>
    <div className="contact-us-items">
      <div className="contact-us-item">
        <span className="contact-us-icon">
          <TbBrandTelegram />
        </span>
        <p className="contact-us-item-caption">info@bluepoint2.com</p>
      </div>
      <div className="contact-us-item">
        <span className="contact-us-icon">
          <BsPhoneVibrate />
        </span>
        <p className="contact-us-item-caption">913.735.6202</p>
      </div>
      <div className="contact-us-item">
        <span className="contact-us-icon">
          <TfiLinkedin />
        </span>
        <p className="contact-us-item-caption">Visit us on Linkedln</p>
      </div>
    </div>
  </div>
  );
}
export default ContactUs;