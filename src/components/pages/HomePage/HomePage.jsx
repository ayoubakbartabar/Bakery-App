import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar";
import ShopifySection from "./HomeComponents/ShopifySection/ShopifySection";
import WelcomeSection from "../../shared/WelcomeSection/WelcomeSection.jsx";
import SignatureSection from "../../shared/SignatureSection/SignatureSection.jsx";
import SomeProducts from "./HomeComponents/SomeProducts/SomeProducts";
import CarouselSection from "../../shared/CarouselSection/CarouselSection.jsx";
import HistorySection from "./HomeComponents/HistorySection/HistorySection.jsx";
import DeliverySection from "./HomeComponents/DeliverySection/DeliverySection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext.jsx";

export default function HomePage() {
  return (
    <>
      <ProductInteractionProvider>
        <Navbar />
        <ShopifySection />
        <WelcomeSection />
        <SignatureSection />
        <SomeProducts />
        <CarouselSection />
        <HistorySection />
        <DeliverySection />
        <Footer />
      </ProductInteractionProvider>
    </>
  );
}
