import React from 'react'
import './Subscribe.scss'
import Button2 from '../button/Button2'

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="subscription_box text-center">
                            <h2 className="text-uppercase text-white">get update from anywhere</h2>
                            <p className="text-white">
                                Bearing Void gathering light light his eavening unto dont afraid.</p>
                                <div className="subcribe-form">
                                    <form target='_black' className='subscription relative' >
                                        <input type="email" name='EMAIL' placeholder='Email Address'  />
                                        <Button2 text = "get started"/>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe