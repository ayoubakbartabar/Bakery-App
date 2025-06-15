import { createContext, useContext, useState } from "react";

// Create a context for product interactions (likes and purchases)
const ProductInteractionContext = createContext();

// Provider component to wrap around parts of the app that need product interaction state
export const ProductInteractionProvider = ({ children }) => {
  // State to track liked products by their IDs (boolean)
  const [likedItems, setLikedItems] = useState({});

  // State to track products added to cart with count and total price
  const [buyProducts, setBuyProducts] = useState({});

  // Toggle the liked status of a product by its ID
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Add a product to the cart or increment its count if already added
  const buyProduct = (product) => {
    const unitPrice = parseFloat(product.price.replace("$", ""));

    setBuyProducts((prev) => {
      const existingProduct = prev[product.id];

      if (existingProduct) {
        // If product already in cart, increase count and update total price
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

      // If product not in cart, add it with count 1 and totalPrice = unit price
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

  const removeProduct = (id) => {
    setBuyProducts((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <ProductInteractionContext.Provider
      value={{ likedItems, toggleLike, buyProducts, buyProduct, removeProduct }}
    >
      {children}
    </ProductInteractionContext.Provider>
  );
};

// Custom hook to easily access product interaction context in components
export const useProductInteraction = () =>
  useContext(ProductInteractionContext);
