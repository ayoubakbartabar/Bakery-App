import React, { useState } from "react";
import "./SomeProducts.css";
import SomeProductsData from "./SomeProductsData.js";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function SomeProducts() {
  // set Hook
  const [likedItems, setLikedItems] = useState({});
  const [buyproducts, setBuyProducts] = useState({});

  // create function for favorite product handler
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // create function for buy product
  const butProduct = (product) => {
    setBuyProducts((prev) => {
      const existingProduct = prev[product.id];

      if (existingProduct) {
        return {
          ...prev,
          [product.id]: {
            ...existingProduct,
            count: existingProduct.count + 1,
          },
        };
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          count: 1,
        },
      };
    });
  };

  return (
    <section className="some-products-section">
      <div className="some-products-section-top">
        <h1 className="some-products-section-top-title">Deal of the day</h1>
        <p className="some-products-section-top-paragraph">BREADS EVERY DAY</p>
        <img
          className="some-products-section-top-svg"
          src="src/assets/images/floral_grande.avif"
          alt="floral grande svg"
        />
      </div>

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
                    alt="new"
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
                  onClick={() => butProduct(item)}
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
