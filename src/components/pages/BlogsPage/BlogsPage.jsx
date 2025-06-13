import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import React from "react";
import "./BlogsPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import BlogsHeaderSection from "./BlogsPageComponents/BlogsHeaderSection/BlogsHeaderSection";
import FeaturesSection from "../../shared/FeaturesSection/FeaturesSection";
import Footer from "../../shared/Footer/Footer";

export default function BlogsPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <BlogsHeaderSection />
      <FeaturesSection />
      <Footer />
    </ProductInteractionProvider>
  );
}
