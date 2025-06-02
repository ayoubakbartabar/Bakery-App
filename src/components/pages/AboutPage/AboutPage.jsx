import React from "react";
import "./AboutPage.jsx";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import { BuyProductsProvider } from "../../shared/BuyProductContext/BuyProductContext.jsx";

export default function AboutPage() {
  return (
    <>
      <BuyProductsProvider>
        <Navbar />

        <Footer />
      </BuyProductsProvider>
    </>
  );
}
