
import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

function Portfolio() {
    return (
        <div className="portfolio" id='Portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title mb-5 text-left">
                            <h2>
                                quality work  <br />
                                Recently done project
                            </h2>
                        </div>
                    </div>
                </div>

                {/* slider----------- */}
                <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>

                    <SwiperSlide>
                        <img src="images/p1.webp" alt=' portfolio'  />
                        <div className="project-details ">
                            <h3>Netinfo.in</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rerum sequi? Porro!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/p3.webp" alt=' portfolio' />
                        <div className="project-details ">
                            <h3>Netinfo.in</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rerum sequi? Porro!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/p2.webp" alt=' portfolio' />
                        <div className="project-details ">
                            <h3>Netinfo.in</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rerum sequi? Porro!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/p5.webp" alt=' portfolio' />
                        <div className="project-details ">
                            <h3>Netinfo.in</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rerum sequi? Porro!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/p4.webp" alt=' portfolio' />
                        <div className="project-details ">
                            <h3>Netinfo.in</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rerum sequi? Porro!</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio