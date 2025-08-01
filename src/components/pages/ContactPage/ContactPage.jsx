import React from "react";
import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext";
import "./ContactPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import ContactHeaderSection from "./ContactPageComponents/ContactHeaderSection/ContactHeaderSection";
import ContactFormSection from "./ContactPageComponents/ContactFormSection/ContactFormSection";
import ContactMapSection from "./ContactPageComponents/ContactMapSection/ContactMapSection";
import FeaturesSection from "../../shared/FeaturesSection/FeaturesSection";
import Footer from "../../shared/Footer/Footer";
export default function ContactPage() {
  return (
    <ProductInteractionProvider>
      <Navbar />
      <ContactHeaderSection />
      <ContactFormSection />
      <FeaturesSection />
      <ContactMapSection />
      <Footer />
    </ProductInteractionProvider>
  );
}
