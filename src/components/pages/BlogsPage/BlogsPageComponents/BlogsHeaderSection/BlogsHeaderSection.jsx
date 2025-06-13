import React from "react";
import "./BlogsHeaderSection.css";

export default function BlogsHeaderSection() {
  return (
    <section className="blogs-header-section">
        <h1 className="blogs-header-title">Products</h1>
        <span className="blogs-header-menu">
          <a href="/" className="blogs-header-link">
            HOME
          </a>
          <p className="blogs-header-paragraph">{` > NEWS`}</p>
        </span>
    </section>
  );
}
