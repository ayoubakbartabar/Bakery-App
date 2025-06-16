import React from "react";
import "./ShoppingBagPage.css";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext.jsx";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

export default function ShoppingBagPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />

      <Footer />
    </ProductInteractionProvider>
  );
}
