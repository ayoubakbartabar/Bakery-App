import React from "react";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import "./ContactPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import ContactHeaderSection from "./ContactPageComponents/ContactHeaderSection/ContactHeaderSection";

export default function ContactPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <ContactHeaderSection />
    </ProductInteractionProvider>
  );
}
