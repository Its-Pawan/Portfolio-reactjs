import React from 'react'
import Header from '../component/header/Header'
import Testimonial from '../component/testimonial/Testimonial'
import Subscribe from '../component/subscribe/Subscribe'
import Features from '../component/features/Features'

export default function Services() {
  return (
    <section className="services def-bg">
      <Header headerHeading="Services" headerPageName="services" />
      <Features />
      <Testimonial/>
      <Subscribe/>
    </section>
  )
}
