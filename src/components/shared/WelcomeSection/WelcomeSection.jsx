import React from "react";
import "./WelcomeSection.css";
import WelcomeSectionData from "./WelcomeSectionData";

export default function WelcomeSection() {
  return (
    <div className="welcome-section-bg">
      <section className="welcome-section">
        <div className="welcome-section-top">
          <h1 className="welcome-section-top-title">Delicieux</h1>
          <p className="welcome-section-top-paragraph">WELCOME TO THE STORE</p>
          <img
            className="welcome-section-top-img"
            src="src/assets/images/floral_grande.avif"
            alt="floral_grande"
          />
        </div>
        <div className="welcome-section-bottom">
          {WelcomeSectionData.map((item) => (
            <div className="welcome-section-box" key={item.id}>
              <img
                className="welcome-section-box-svg"
                src={item.svg}
                alt="svg"
              />
              <h2 className="welcome-section-box-title">{item.title}</h2>
              <h3 className="welcome-section-box-date">{item.date}</h3>
              <p className="welcome-section-box-paragraph">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
