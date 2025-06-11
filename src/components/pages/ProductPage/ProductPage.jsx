import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import ProductComHeader from "./ProductPageComponents/ProductComHeader/ProductComHeader";
import BannerSection from "./ProductPageComponents/BannerSection/BannerSection";
import SliderSection from "./ProductPageComponents/SliderSection/SliderSection";
import BuyProductSection from "./ProductPageComponents/BuyProductSection/BuyProductSection";
import "./ProductPage.css";
import FeaturesSection from "./ProductPageComponents/FeaturesSection/FeaturesSection";

export default function ProductPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <ProductComHeader />
      <div className="product-main-container">
        <SliderSection />
        <div className="banner-section">
          <div className="banner-wrapper">
            <BannerSection />
            <BuyProductSection />
          </div>
        </div>
      </div>
      <FeaturesSection/>
      <Footer />
    </ProductInteractionProvider>
  );
}
