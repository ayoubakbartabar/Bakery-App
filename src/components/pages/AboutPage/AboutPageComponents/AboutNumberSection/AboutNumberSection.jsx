import React from "react";
import AboutNumberData from "./AboutNumberData";
import "./AboutNumberSection.css";

export default function AboutNumberSection() {
  return (
    <section className="about-number-section">
      {AboutNumberData.map((item) => (
        <div key={item.id} className="about-number-item">
          <i className={item.iconClass}></i>
          <h3 className="about-number-number">{item.number}</h3>
          <p className="about-number-title">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
