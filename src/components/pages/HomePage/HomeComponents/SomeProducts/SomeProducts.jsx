import React, { useState } from "react";
import "./SomeProducts.css";
import SomeProductsData from "./SomeProductsData.js";
import { useBuyProducts } from "../../../../shared/BuyProductContext/BuyProductContext.jsx";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function SomeProducts() {
  // Track liked (favorite) products by ID
  const [likedItems, setLikedItems] = useState({});

  // Access global cart context
  const { buyProducts, setBuyProducts } = useBuyProducts();

  // Toggle favorite state for a product
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Add product to cart or increase its count
  const buyProduct = (product) => {
    const unitPrice = parseFloat(product.price.replace("$", ""));

    setBuyProducts((prev) => {
      const existingProduct = prev[product.id];

      if (existingProduct) {
        const newCount = existingProduct.count + 1;

        return {
          ...prev,
          [product.id]: {
            ...existingProduct,
            count: newCount,
            totalPrice: (unitPrice * newCount).toFixed(2),
          },
        };
      }

      // Add new product to cart
      return {
        ...prev,
        [product.id]: {
          ...product,
          count: 1,
          totalPrice: unitPrice.toFixed(2),
        },
      };
    });
  };

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
