import React from "react";
import "./SliderSection.css";

export default function SliderSection() {
  const categoriesHandler = () => {};
  const inputFilteredHandler = () => {};

  return (
    <section className="slider-section">
      <div className="categories-container">
        <h2 className="section-title">CATEGORIES</h2>
        <ul className="category-list">
          <li onClick={categoriesHandler}>Bakery (8)</li>
          <li onClick={categoriesHandler}>Bio (8)</li>
          <li onClick={categoriesHandler}>Sweet (6)</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="filter-by-price">
        <h2 className="section-title">FILTER BY PRICE</h2>
        <label>
          <input type="checkbox" onChange={inputFilteredHandler} />
          <span>0 - 49$</span>
        </label>
        <label>
          <input type="checkbox" onChange={inputFilteredHandler} />
          <span>50$ - 99$</span>
        </label>
      </div>

      <hr className="divider" />

      <div className="ads-banner-container">
        <h2 className="section-title">ADS BANNER</h2>
        <a className="ads-banner" href="/">
          {/* Optional: add a span with text if needed */}
        </a>
      </div>
    </section>
  );
}
