import React from "react";
import "./ContactHeaderSection.css";
export default function ContactHeaderSection() {
  return (
    <div className="contact-section-bg">
      <section className="contact-section">
        <h1 className="contact-title">Contact Us</h1>
        <span className="contact-menu">
          <a href="/" className="contact-link">
            HOME
          </a>
          <p className="contact-paragraph">{` > Contact Us`}</p>
        </span>
      </section>
    </div>
  );
}
