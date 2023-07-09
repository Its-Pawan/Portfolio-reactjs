import React from 'react'
import Intro from '../component/intro/Intro'
import Banner from '../component/banner/Banner'
import Brands from '../component/brands/Brands'
import Features from '../component/features/Features'
import Portfo from '../component/portfolio/Portfo'
import Testimonial from '../component/testimonial/Testimonial'
import Subscribe from '../component/subscribe/Subscribe'

export default function Home() {
  return (
    <section className="home def-bg">
      <Banner />
      <Intro />
      <Brands />
      <Features />
      <Portfo />
      <Testimonial/>
      <Subscribe />
    </section>
  )
}
