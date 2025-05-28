import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar";
import ShopifySection from "./HomeComponents/ShopifySection/ShopifySection";
import WelcomeSection from "./HomeComponents/WelcomeSection/WelcomeSection";
import SignatureSection from "./HomeComponents/SignatureSection/SignatureSection";
import SomeProducts from "./HomeComponents/SomeProducts/SomeProducts";

import { BuyProductsProvider } from "../../shared/BuyProductContext/BuyProductContext.jsx"; 

export default function HomePage() {
  return (
    <>
    <BuyProductsProvider> 
      <Navbar />
      <ShopifySection />
      <WelcomeSection />
      <SignatureSection />
      <SomeProducts />
    </BuyProductsProvider>
    </>
  );
}
