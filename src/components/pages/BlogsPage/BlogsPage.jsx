import React from "react";
import "./BlogsPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";

export default function BlogsPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />

      <Footer />
    </ProductInteractionProvider>
  );
}
