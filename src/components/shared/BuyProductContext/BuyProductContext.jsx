import { createContext, useContext, useState } from "react";

// create context
const BuyProductsContext = createContext();

// set context Hook
export const useBuyProducts = () => useContext(BuyProductsContext);

// create provide context
export const BuyProductsProvider = ({ children }) => {
  const [buyProducts, setBuyProducts] = useState({});

  return (
    <BuyProductsContext.Provider value={{ buyProducts, setBuyProducts }}>
      {children}
    </BuyProductsContext.Provider>
  );
};
