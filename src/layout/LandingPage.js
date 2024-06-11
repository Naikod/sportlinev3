import React from 'react'
import Navbar from '../component/core/navbar'
import Landing from '../component/landingpage/landing'
import BenefitLanding from '../component/landingpage/benefitLanding'
import BestOfferProduct from '../component/landingpage/bestOfferProduct'
import Footer from '../component/core/footer'
import NavbarLogin from '../component/core/navbarLogin'

export default function Main() {
  return (
    <div>
      <Navbar />
      <Landing />
      <BenefitLanding />
      {/* <BestOfferProduct /> */}
      <Footer />
    </div>
  )
}
