import React from "react";
import "./ShoppingBagPage.css";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext.jsx";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import ShoppingBagHeaderSection from "./ShoppingBagComponents/ShoppingBagHeaderSection/ShoppingBagHeaderSection.jsx";
import ProductTableSection from "./ShoppingBagComponents/ProductTableSection/ProductTableSection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

export default function ShoppingBagPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
        <ShoppingBagHeaderSection />
        <ProductTableSection/>
      <Footer />
    </ProductInteractionProvider>
  );
}
