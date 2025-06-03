import React from "react";
import "./AboutUsSection.css";

export default function AboutUsSection() {
  return (
    <section className="about-us-section">
      <h1 className="about-us-title">About Us</h1>
      <span className="about-us-menu">
        <a href="/" className="about-us-link">
          HOME
        </a>
        <p className="about-us-paragraph">{` > About Us`}</p>
      </span>
    </section>
  );
}
