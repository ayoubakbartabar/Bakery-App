import React from "react";
import "./OurChefSection.css";
import OurChefData from "./OurChefData";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";

export default function OurChefSection() {
  return (
    <section className="our-chef-section">
      <h2 className="our-chef-title">Our Chef</h2>
      <p className="our-chef-subtitle">Work With Passion</p>
      <img
        className="welcome-section-top-img"
        src="src/assets/images/floral_grande.avif"
        alt="floral_grande"
      />

      <div className="our-chef-grid">
        {OurChefData.map((chef) => (
          <div className="our-chef-card" key={chef.id}>
            <img src={chef.image} alt={chef.title} className="our-chef-image" />
            <div className="our-chef-info">
              <div className="our-chef-main-info">
                <h3 className="our-chef-name">{chef.title}</h3>
                <p className="our-chef-role">{chef.role}</p>
                <div className="our-chef-divider"></div>
                <p className="our-chef-paragraph">{chef.paragraph}</p>
              </div>

              <div className="our-chef-bottom">
                <div className="our-chef-contact">
                  <p>Tel: {chef.tel}</p>
                  <p>{chef.url}</p>
                </div>
                <div className="our-chef-icons">
                  <a href="#" className="our-chef-icon-link">
                    <FaFacebookF size={14} />
                  </a>
                  <a href="#" className="our-chef-icon-link">
                    <FaTwitter size={14} />
                  </a>
                  <a href="#" className="our-chef-icon-link">
                    <FaDribbble size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
