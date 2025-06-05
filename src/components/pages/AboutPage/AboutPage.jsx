import React from "react";
import "./AboutPage.jsx";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import AboutUsSection from "./AboutPageComponents/AboutUsSection/AboutUsSection.jsx";
import WelcomeSection from "../../shared/WelcomeSection/WelcomeSection.jsx";
import SignatureSection from "../../shared/SignatureSection/SignatureSection.jsx";
import CarouselSection from "../../shared/CarouselSection/CarouselSection.jsx";

import { BuyProductsProvider } from "../../shared/BuyProductContext/BuyProductContext.jsx";
import OurChefSection from "./AboutPageComponents/OurChefSection/OurChefSection.jsx";

export default function AboutPage() {
  return (
    <>
      <BuyProductsProvider>
        <Navbar />
          <AboutUsSection/>
          <WelcomeSection />
          <SignatureSection />
          <OurChefSection/>
          <CarouselSection />
        <Footer />
      </BuyProductsProvider>
    </>
  );
}
