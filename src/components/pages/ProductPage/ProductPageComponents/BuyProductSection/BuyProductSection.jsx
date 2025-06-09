import React from "react";
import "./BuyProductSection.css";
import ProductsData from "../../ProductsData.js";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useProductInteraction } from "../../../../shared/ProductInteractionContext/ProductInteractionContext";

export default function BuyProductSection() {
  const { likedItems, toggleLike, buyProduct } = useProductInteraction();

  return (
    <section className="buy-product-section">
      {ProductsData.map((item) => (
        <div key={item.id} className="product-box">
          <img src={item.image} alt={item.title} className="product-image" />
          <h2 className="product-title">{item.title}</h2>
          <p className="product-detail">{item.detail}</p>
          <h4 className="product-price">{item.price}</h4>

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
      ))}
    </section>
  );
}
