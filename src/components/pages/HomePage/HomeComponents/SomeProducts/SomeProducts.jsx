import React from "react";
import "./SomeProducts.css";
import SomeProductsData from "./SomeProductsData.js";
import { useProductInteraction } from "../../../../shared/ProductInteractionContext/ProductInteractionContext.jsx";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function SomeProducts() {
  // set context
  const { likedItems, toggleLike, buyProduct } = useProductInteraction();

  return (
    <section className="some-products-section">
      {/* Header section */}
      <div className="some-products-section-top">
        <h1 className="some-products-section-top-title">Deal of the day</h1>
        <p className="some-products-section-top-paragraph">BREADS EVERY DAY</p>
        <img
          className="some-products-section-top-svg"
          src="src/assets/images/floral_grande.avif"
          alt="floral decoration"
        />
      </div>

      {/* Product cards */}
      <div className="some-products-section-bottom">
        {SomeProductsData.map((item) => (
          <div className="some-products-box" key={item.id}>
            <div className="some-products-box-image-box">
              <img
                className="some-products-box-image"
                src={item.image}
                alt={item.title}
              />
              {item.new && (
                <>
                  <img
                    src={item.svg}
                    alt="new label"
                    className="some-products-box-svg"
                  />
                  <i className="some-products-box-new">New</i>
                </>
              )}
            </div>

            <div className="some-products-box-info-box">
              <h2 className="some-products-box-info-title">{item.title}</h2>
              <p className="some-products-box-info-paragraph">{item.detail}</p>
              <p className="some-products-box-info-price">{item.price}</p>

              {/* Like & Buy buttons */}
              <div className="some-products-box-buttons">
                <button
                  className={`favorite-product-buttons ${
                    likedItems[item.id] ? "active" : ""
                  }`}
                  onClick={() => toggleLike(item.id)}
                >
                  {likedItems[item.id] ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>

                <button
                  onClick={() => buyProduct(item)}
                  className="buy-product-buttons"
                >
                  <RiShoppingBasketLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
