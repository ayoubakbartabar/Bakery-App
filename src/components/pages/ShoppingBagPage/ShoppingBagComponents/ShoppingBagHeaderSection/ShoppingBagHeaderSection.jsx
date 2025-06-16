import React from "react";
import "./ShoppingBagHeaderSection.css";

export default function ShoppingBagHeaderSection() {
  return (
    <section className="shopping-bag-header-section">
      <h1 className="shopping-bag-header-title">Your Cart</h1>
      <span className="shopping-bag-header-menu">
        <a href="/" className="shopping-bag-header-link">
          HOME
        </a>
        <p className="shopping-bag-header-paragraph">{` > Your Shopping Cart`}</p>
      </span>
    </section>
  );
}
