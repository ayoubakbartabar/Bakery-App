import React, { useState } from "react";
import "./ShopifySection.css";
import ShopifyData from "./ShopifySectionData";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function ShopifySection() {
  // Set Hook
  const [current, setCurrent] = useState(0);
  const length = ShopifyData.length;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  // create arrows handler
  const prevSlider = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlider = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  return (
    <section className="shopify-section">
      <div className="slider-container">
        <button className="nav-button left" onClick={prevSlider}>
          <MdOutlineKeyboardArrowLeft size={32} />
        </button>

        {ShopifyData.map((item, index) => (
          <div
            key={item.id}
            className={`slider-item ${
              index === current ? "active" : "inactive"
            }`}
          >
            <img className="slider-image" src={item.img} alt={item.alt} />
          </div>
        ))}
        <button className="nav-button right" onClick={nextSlider}>
          <MdOutlineKeyboardArrowRight size={32} />
        </button>
      </div>

      <button
        className={`add-to-cart ${clicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <span className="cart-text">ADD TO CART</span>
        <MdOutlineShoppingCart
          className={`cart-icon ${clicked ? "exit-right" : ""}`}
        />
      </button>
    </section>
  );
}
