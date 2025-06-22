import React from "react";
import "./FeaturesSection.css";
import FeaturesData from "./FeaturesData.js";

export default function FeaturesSection() {
  return (
    <div className="features-section-bg">
      <section className="features-section">
        {FeaturesData.map((item) => (
          <div key={item.id} className="features-box">
            <img src={item.svg} alt="svg" className="features-box-img" />
            <h1 className="features-box-title">{item.title}</h1>
            <p className="features-box-detail">{item.detail}</p>
            <p className="features-box-paragraph">{item.paragraph}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
