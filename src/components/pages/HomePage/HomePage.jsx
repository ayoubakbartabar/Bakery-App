import React from 'react'
import './HomePage.css'
import Navbar from '../../shared/Navbar/Navbar'
import ShopifySection from './HomeComponents/ShopifySection/ShopifySection'
import WelcomeSection from './HomeComponents/WelcomeSection/WelcomeSection'
import SignatureSection from './HomeComponents/SignatureSection/SignatureSection'
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <ShopifySection/>
      <WelcomeSection/>
      <SignatureSection/>
    </>
  )
}
