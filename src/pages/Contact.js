import React from 'react'
import './contact.css'
import Header from '../component/header/Header'
import { FaPhone, FaHome } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import Button1 from '../component/button/Button1'

export default function Contact(){

  return (
    <div className='def-bg contact-container'>
      <Header headerHeading="Contact" headerPageName="Contact" />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  < FaHome />
                  <h6>California, United States</h6>
                  <p>Santa monica bullevard</p>
                </div>
                <div className="info_item">
                  <FaPhone />
                  <h6>00 (440) 9865 562</h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
                <div className="info_item">
                  <AiFillMessage />
                  <h6>support@email.com</h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-9">
              <form className="row contact_form" action="https://formspree.io/f/meqwrngl " method="POST" id="contactForm" novalidate="novalidate">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <Button1 btnName="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
