import React from 'react'
import Header from '../component/header/Header'
import Intro from '../component/intro/Intro'
import Brands from '../component/brands/Brands'
import Testimonial from '../component/testimonial/Testimonial'
import Subscribe from '../component/subscribe/Subscribe'

export default function About() {
  return (
    <section className="about  def-bg">
      <Header headerHeading ="About Us" headerPageName="About"/>
      <Intro/>
      <Brands/>
      <Testimonial/>
      <Subscribe/>
    </section>
  )
}
