import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { BuyProductsProvider } from "../../shared/BuyProductContext/BuyProductContext";
import ProductComHeader from "./ProductPageComponents/ProductComHeader/ProductComHeader";
import "./ProductPage.css";

export default function ProductPage() {
  return (
    <>
      <BuyProductsProvider>
        <Navbar />
        <ProductComHeader />
        <Footer />
      </BuyProductsProvider>
    </>
  );
}
