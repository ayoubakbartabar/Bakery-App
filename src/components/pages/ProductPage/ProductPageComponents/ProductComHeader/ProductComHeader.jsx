import React from "react";
import "./ProductComHeader.css";

export default function ProductComHeader() {
  return (
    <div className="product-com-header-bg">
      <section className="product-com-header">
        <h1 className="product-header-title">Products</h1>
        <span className="product-header-menu">
          <a href="/" className="product-header-link">
            HOME
          </a>
          <p className="product-header-paragraph">{` > Products`}</p>
        </span>
      </section>
    </div>
  );
}
