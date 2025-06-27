import React from "react";
import "./ContactFormSection.css";
import { CiPhone, CiLocationOn, CiTwitter } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import { GrRss } from "react-icons/gr";

const officeData = [
  {
    title: "Office at America",
    address: "Basement Company, New York",
    email: "enquiry@bakery.com",
    phone: "+1 650-253-0000",
  },
  {
    title: "Office at Vietnam",
    address: "189/32 Basement Company, Paris, France",
    email: "enquiry@bakery.com",
    phone: "+1 650-253-0000",
  },
  {
    title: "Office at Paris",
    address: "189/32 Basement Company, Paris, France",
    email: "enquiry@bakery.com",
    phone: "+1 650-253-0000",
  },
];

export default function ContactFormSection() {
  return (
    <div className="contact-form-bg">
      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">Name *</label>
                <input className="contact-form-input" type="text" required />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Email *</label>
                <input className="contact-form-input" type="email" required />
              </div>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">Phone Number *</label>
              <input className="contact-form-input" type="tel" required />
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">Message *</label>
              <textarea
                className="contact-form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-form-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-us-info">
          {officeData.map((office, index) => (
            <div key={index} className="contact-us-info-box">
              <h3 className="contact-us-info-title">{office.title}</h3>
              <p className="contact-us-info-item">
                <CiLocationOn className="contact-us-info-icon" />
                {office.address}
              </p>
              <p className="contact-us-info-item">
                <TfiEmail className="contact-us-info-icon" />
                {office.email}
              </p>
              <p className="contact-us-info-item">
                <CiPhone className="contact-us-info-icon" />
                {office.phone}
              </p>
            </div>
          ))}
          <div className="contact-social">
            <h3 className="contact-social-title">Follow Us</h3>
            <div className="contact-social-icons">
              <TiSocialFacebook className="contact-social-icon" />
              <CiTwitter className="contact-social-icon" />
              <GrRss className="contact-social-icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
