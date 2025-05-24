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

        <div className="slider-item">
          <img className="slider-image" src={ShopifyData[current].img} alt={ShopifyData[current].alt} />
        </div>

        <button className="nav-button right" onClick={nextSlider}>
          <MdOutlineKeyboardArrowRight size={32} />
        </button>
      </div>

      <button className="add-to-cart">
        <span className="cart-text">ADD TO CART</span>
        <MdOutlineShoppingCart className="cart-icon" />
      </button>
    </section>
  );
}
