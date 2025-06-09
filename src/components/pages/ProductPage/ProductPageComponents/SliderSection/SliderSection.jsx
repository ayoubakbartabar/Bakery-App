import React from "react";
import "./SliderSection.css";

export default function SliderSection() {
  // create categoriesHandler function
  const categoriesHandler = () => {};
  
  // create inputFilteredHandler function
  const inputFilteredHandler = () => {};

  return (
    <section className="slider-section">
      <div className="categories-container">
        <button className="new-categories" onClick={() => categoriesHandler()}>
          New
        </button>
      </div>
      <div className="filter-by-price">
        <input
          type="checkbox"
          onChange={() => inputFilteredHandler()}
          className="max-50"
        />
      </div>
      <div className="ads-banner-container"></div>
    </section>
  );
}
