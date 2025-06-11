import React, { useState } from "react";
import "./BuyProductSection.css";
import ProductsData from "../../ProductsData.js";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useProductInteraction } from "../../../../shared/ProductInteractionContext/ProductInteractionContext";

export default function BuyProductSection() {
  
  // Access interaction context for likes and purchases
  const { likedItems, toggleLike, buyProduct } = useProductInteraction();

  // State for currently selected product category from dropdown
  const [selectedCategory, setSelectedCategory] = useState("");

  // Create a unique list of product categories
  const uniqueCategories = [
    ...new Set(ProductsData.map((item) => item.productCategories)),
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? ProductsData.filter((item) => item.productCategories === selectedCategory)
    : ProductsData;

  return (

    <section className="buy-product-section">
      <select
        className="filter-product"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Render filtered products */}
      {filteredProducts.map((item) => (
        <div key={item.id} className="product-box">
          <img src={item.image} alt={item.title} className="product-image" />
          <h2 className="product-title">{item.title}</h2>
          <p className="product-detail">{item.detail}</p>
          <h4 className="product-price">{item.price}</h4>
          <p className="product-paragraph">{item.paragraph}</p>

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
