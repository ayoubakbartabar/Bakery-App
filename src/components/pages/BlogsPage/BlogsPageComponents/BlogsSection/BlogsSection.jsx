import React from "react";
import "./BlogsSection.css";
import BlogsData from "./BlogsData.js";

export default function BlogsSection() {
  return (
    <div className="blogs-section-bg">
      <section className="blogs-section">
        {BlogsData.map((item) => (
          <article key={item.id} className="blogs-card" aria-label={item.title}>
            <img src={item.image} alt={item.title} className="blogs-image" />
            <p className="blogs-date">{item.date}</p>
            <h3 className="blogs-card-title">{item.title.toUpperCase()}</h3>
            <p className="blogs-author">
              By <span>{item.author}</span>
            </p>
            <p className="blogs-paragraph">{item.paragraph}</p>
            <a
              href="#"
              className="read-more"
              aria-label={`Read more about ${item.title}`}
            >
              READ MORE
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
