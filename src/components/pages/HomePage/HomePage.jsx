import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar";
import ShopifySection from "./HomeComponents/ShopifySection/ShopifySection";
import WelcomeSection from "./HomeComponents/WelcomeSection/WelcomeSection";
import SignatureSection from "./HomeComponents/SignatureSection/SignatureSection";
import SomeProducts from "./HomeComponents/SomeProducts/SomeProducts";
import CarouselSection from "./HomeComponents/CarouselSection/CarouselSection.jsx";
import HistorySection from "./HomeComponents/HistorySection/HistorySection.jsx";
import DeliverySection from "./HomeComponents/DeliverySection/DeliverySection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

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
        <CarouselSection />
        <HistorySection/>
        <DeliverySection/>
        <Footer/>
      </BuyProductsProvider>
    </>
  );
}
