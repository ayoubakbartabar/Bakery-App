import React from "react";
import "./AboutPage.jsx";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import AboutUsSection from "./AboutPageComponents/AboutUsSection/AboutUsSection.jsx";
import WelcomeSection from "../../shared/WelcomeSection/WelcomeSection.jsx";
import SignatureSection from "../../shared/SignatureSection/SignatureSection.jsx";
import AboutNumberSection from "./AboutPageComponents/AboutNumberSection/AboutNumberSection.jsx";
import OurChefSection from "./AboutPageComponents/OurChefSection/OurChefSection.jsx";
import CarouselSection from "../../shared/CarouselSection/CarouselSection.jsx";

import { ProductInteractionProvider } from "../../shared/ProductInteractionContext/ProductInteractionContext.jsx";

export default function AboutPage() {
  return (
    <>
      <ProductInteractionProvider>
        <Navbar />
        <AboutUsSection />
        <WelcomeSection />
        <SignatureSection />
        <AboutNumberSection />
        <OurChefSection />
        <CarouselSection />
        <Footer />
      </ProductInteractionProvider>
    </>
  );
}
