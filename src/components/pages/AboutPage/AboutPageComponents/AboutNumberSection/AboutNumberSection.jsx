import React from "react";
import AboutNumberData from "./AboutNumberData";
import "./AboutNumberSection.css";

export default function AboutNumberSection() {
  return (
    <section className="about-number-section">
      {AboutNumberData.map((item) => (
        <div className="about-number-box" key={item.id}>
          <i className={`icon ${item.iconClass}`}></i>
          <h3 className="number">{item.number}</h3>
          <p className="title">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
