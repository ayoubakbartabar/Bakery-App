import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import React from "react";
import "./BlogsPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import FeaturesSection from "../../shared/FeaturesSection/FeaturesSection";

export default function BlogsPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <FeaturesSection />
      <Footer />
    </ProductInteractionProvider>
  );
}
