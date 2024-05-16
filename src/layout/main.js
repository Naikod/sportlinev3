import React from 'react'
import Navbar from '../component/core/navbar'
import Landing from '../component/core/landing'
import CardBody from '../component/core/cardBody'
import CardGroup from '../component/core/cardGroup'
import BenefitLanding from '../component/core/benefitLanding'
import BestOfferProduct from '../component/core/bestOfferProduct'
import Footer from '../component/core/footer'

export default function Main() {
  return (
    <div>
      <Navbar />
      <Landing />
      <BenefitLanding />
      <BestOfferProduct />
      <Footer />
    </div>
  )
}
