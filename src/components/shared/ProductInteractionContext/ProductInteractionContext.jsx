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

  // State to track liked products by their IDs
  const [likedItems, setLikedItems] = useState({});

  // Toggle like status for a given product ID
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // flip the like status
    }));
  };

  // Add a product to buyProducts or increase its count by 1 if it already exists
  const buyProduct = (product) => {
    const unitPrice = parseFloat(product.price.replace("$", ""));

    setBuyProducts((prev) => {
      const existing = prev[product.id];
      const count = existing ? existing.count + 1 : 1;
      const totalPrice = (unitPrice * count).toFixed(2);

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

  // Update product count and total price directly
  const setProductCount = (productId, count) => {
    if (count < 1) return; // prevent invalid count

    setBuyProducts((prev) => {
      const product = prev[productId];
      if (!product) return prev;

      const unitPrice = parseFloat(product.price.replace("$", ""));
      const totalPrice = (unitPrice * count).toFixed(2);

      return {
        ...prev,
        [productId]: {
          ...product,
          count,
          totalPrice,
        },
      };
    });
  };

  // Save buyProducts state to localStorage on every change
  useEffect(() => {
    localStorage.setItem("buyProducts", JSON.stringify(buyProducts));
  }, [buyProducts]);

  return (
    <ProductInteractionContext.Provider
      value={{
        likedItems,
        toggleLike,
        buyProducts,
        buyProduct,
        removeProduct,
        setProductCount, // expose the setter to update quantity
      }}
    >
      {children}
    </ProductInteractionContext.Provider>
  );
};

// Custom hook to access the ProductInteractionContext easily
export const useProductInteraction = () =>
  useContext(ProductInteractionContext);
