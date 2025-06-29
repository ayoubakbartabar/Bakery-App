import React from "react";
import AboutNumberData from "./AboutNumberData";
import "./AboutNumberSection.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutNumberSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-number-bg">
      <section className="about-number-section" ref={ref}>
        {AboutNumberData.map((item) => (
          <div key={item.id} className="about-number-item">
            <img
              src={item.svg}
              alt={item.title}
              className="about-number-image"
            />
            <h3 className="about-number-number">
              {inView ? <CountUp end={item.number} duration={2} /> : 0}
            </h3>
            <p className="about-number-title">{item.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
