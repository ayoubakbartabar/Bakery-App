import React from 'react'
import './HomePage.css'
import Navbar from '../../shared/Navbar/Navbar'
import ShopifySection from './HomeComponents/ShopifySection/ShopifySection'
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <ShopifySection/>
    </>
  )
}
