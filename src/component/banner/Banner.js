import React from 'react'
import Button1 from '../button/Button1'
import Button2 from '../button/Button2'
import './Banner.scss'
import resume from './resume.pdf'
import { NavLink } from 'react-router-dom'


export default function Banner() {
  return (
    <div className='banner mt-5'>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 banner-contant">
              <h3 className="text-uppercase">Hello</h3>
              <h1 className="text-uppercase">I am Pawan Joshi</h1>
              <h5 className='text-uppercase'> A Front-end web developer</h5>
              <div className="d-flex align-item-center banner-btn">
                <NavLink to="/contact">
                  <Button1 btnName="Hire me" />
                </NavLink>
                <a href={resume} download>
                  <Button2 text="get cv" />
                </a>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 banner-image">
              <img className='img-fluid' src="images/home-right.webp" alt="banner-hero " />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
