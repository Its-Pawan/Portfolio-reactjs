import React from 'react'
import Header from '../component/header/Header'
import Portfo from '../component/portfolio/Portfo'
import Subscribe from '../component/subscribe/Subscribe'

export default function Portfolio() {
  return (
    <div className='def-bg'>
      <Header headerHeading="Portfolio" headerPageName="Portfolio" />
    <Portfo/>
    <Subscribe/>
    </div>
  )
}
