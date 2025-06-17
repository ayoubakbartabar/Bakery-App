import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for product interactions (likes and purchases)
const ProductInteractionContext = createContext();

// Provider component to wrap around parts of the app that need product interaction state
export const ProductInteractionProvider = ({ children }) => {
  // Initialize buyProducts state by reading from localStorage if available
  const [buyProducts, setBuyProducts] = useState(() => {
    const saved = localStorage.getItem("buyProducts");
    return saved ? JSON.parse(saved) : {};
  });

  // State to track liked products
  const [likedItems, setLikedItems] = useState({});

  // Toggle like status for a given product ID
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // flip the like status
    }));
  };

  // Add a product to the buyProducts state or increase its count if it already exists
  const buyProduct = (product) => {
    const unitPrice = parseFloat(product.price.replace("$", ""));

    setBuyProducts((prev) => {
      const existing = prev[product.id];
      const count = existing ? existing.count + 1 : 1;
      const price = parseFloat(product.price.replace("$", ""));
      const totalPrice = (price * count).toFixed(2);

      return {
        ...prev,
        [product.id]: {
          ...product,
          count,
          totalPrice,
        },
      };
    });
  };

  // Remove a product from buyProducts by ID
  const removeProduct = (id) => {
    setBuyProducts((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  // Save the buyProducts state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("buyProducts", JSON.stringify(buyProducts));
  }, [buyProducts]);

  return (
    <ProductInteractionContext.Provider
      value={{ likedItems, toggleLike, buyProducts, buyProduct, removeProduct }}
    >
      {children}
    </ProductInteractionContext.Provider>
  );
};

// Custom hook to access the ProductInteractionContext easily
export const useProductInteraction = () =>
  useContext(ProductInteractionContext);
