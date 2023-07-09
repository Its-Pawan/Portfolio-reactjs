import './Testimonial.scss'
import React from 'react'



export default function Testimonial() {


    return (
        <section className="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main-title">
                            <h2>client say about me</h2>
                            <p>
                                Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
                                <br />
                                beginning signs open god you're gathering ithe
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="row">

                    <div className="testi_slider d-flex">

                        <div className="testi_item ">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="images/t1.webp" alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Davil Saden</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item ">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="images/t2.webp" alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Elite Martin</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                </div>

            </div>
        </section>
    )
}




