import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import React from "react";
import "./BlogsPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import BlogsHeaderSection from "./BlogsPageComponents/BlogsHeaderSection/BlogsHeaderSection";
import BlogsSection from "./BlogsPageComponents/BlogsSection/BlogsSection";
import FeaturesSection from "../../shared/FeaturesSection/FeaturesSection";
import Footer from "../../shared/Footer/Footer";

export default function BlogsPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <BlogsHeaderSection />
      <BlogsSection/>
      <FeaturesSection />
      <Footer />
    </ProductInteractionProvider>
  );
}
