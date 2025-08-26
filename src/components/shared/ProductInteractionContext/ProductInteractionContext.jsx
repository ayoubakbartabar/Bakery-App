import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ProductInteractionContext = createContext();

export const ProductInteractionProvider = ({ children }) => {
  const [buyProducts, setBuyProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  // Load products from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("buyProducts");
    if (saved) {
      try {
        setBuyProducts(JSON.parse(saved));
      } catch {
        setBuyProducts([]);
      }
    }
  }, []);

  // Centralized update function
  const updateProducts = useCallback((updater) => {
    setBuyProducts((current) => {
      const updated = updater(current);
      localStorage.setItem("buyProducts", JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Add or increment product
  const buyProduct = useCallback(
    (product) => {
      const unitPrice = parseFloat(product.price.replace("$", ""));
      updateProducts((products) => {
        const existing = products.find((p) => p.id === product.id);
        if (existing) {
          return products.map((p) =>
            p.id === product.id
              ? {
                  ...p,
                  count: p.count + 1,
                  totalPrice: ((p.count + 1) * unitPrice).toFixed(2),
                }
              : p
          );
        }
        return [
          ...products,
          { ...product, count: 1, totalPrice: unitPrice.toFixed(2) },
        ];
      });
    },
    [updateProducts]
  );

  // Decrement or remove product
  const decrementProduct = useCallback(
    (id) => {
      updateProducts((products) =>
        products
          .map((p) =>
            p.id === id
              ? {
                  ...p,
                  count: p.count - 1,
                  totalPrice: (
                    (p.count - 1) *
                    parseFloat(p.price.replace("$", ""))
                  ).toFixed(2),
                }
              : p
          )
          .filter((p) => p.count > 0)
      );
    },
    [updateProducts]
  );

  // Remove product by ID
  const removeProduct = useCallback(
    (id) => updateProducts((products) => products.filter((p) => p.id !== id)),
    [updateProducts]
  );

  // Toggle like
  const toggleLike = useCallback((id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <ProductInteractionContext.Provider
      value={{
        likedItems,
        toggleLike,
        buyProducts,
        buyProduct,
        decrementProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductInteractionContext.Provider>
  );
};

export const useProductInteraction = () =>
  useContext(ProductInteractionContext);
