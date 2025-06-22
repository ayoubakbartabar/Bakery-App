import React, { useState, useRef } from "react";
import "./ShopifySection.css";
import ShopifyData from "./ShopifySectionData";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineShoppingCart,
} from "react-icons/md";

export default function ShopifySection() {
  // set Hook
  const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState(false);
  const length = ShopifyData.length;
  // set UseRef
  const startX = useRef(null);
  // create  add to cart function
  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  // create arrows handler
  const prevSlider = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlider = () => {
    setCurrent((prev) => (prev + 1) % length);
  };
  // create function for touch of mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left
        nextSlider();
      } else {
        // Swipe right
        prevSlider();
      }
    }

    startX.current = null;
  };

  return (
    <div className="shopify-section-bg">
      <section className="shopify-section">
        <div
          className="slider-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Hide arrows on mobile */}
          <button className="nav-button left">
            <MdOutlineKeyboardArrowLeft size={32} onClick={prevSlider} />
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

          <button className="nav-button right">
            <MdOutlineKeyboardArrowRight size={32} onClick={nextSlider} />
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
    </div>
  );
}
