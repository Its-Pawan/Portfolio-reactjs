import React from 'react'
import './Brands.scss'
import { BsTelephoneFill } from 'react-icons/bs';

export default function Brands() {
    return (
        <section className="brands">
            <div className="container-fluif">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 brands-left-data">

                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo2.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo3.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo4.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo5.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo6.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo9.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo3.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo5.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="images/logo1.webp" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="offset-lg-2 col-lg-4 col-md-6 brands-right-data">
                            <div className="client-info">
                                <div className="d-flex mb-50">
                                    <span className="lage">03</span>
                                    <span className="smll">Years Experience Working</span>
                                </div>
                                <div className="call-now d-flex">
                                    <div><span><BsTelephoneFill /></span></div>
                                    <div className="ml-15">
                                        <p>call us now</p>
                                        <h3>(+91) 800-543-6789</h3>
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
