import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaTwitter, FaInstagram, FaWordpress } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="footer_top flex-column">
                            <div className="footer_logo">
                                <NavLink to="/">
                                    <img src="images/logo.webp" alt="Logo" />
                                </NavLink>

                                <h4>Follow Me</h4>
                            </div>
                            <div className="footer_social">
                                <a target="_black" href="https://m.facebook.com/profile.php?eav=AfbN0I4WUmuP9iykvXC1iipubEQgUasIMWD5n0ZLq6Rdd3AUEfqVAKfsa7F0lA8BexE&paipv=0"><FaFacebookF /></a>
                                <a target="_black" href="https://twitter.com/UK02Pawan?t=Gb6uhMMCipDRin-PAh3qOw&s=09"><FaTwitter /></a>
                                <a target="_black" href="https://www.instagram.com/itz_pawan.pj___/"><FaInstagram /></a>
                                <a target="_black" href="https://netinfo.in/"><FaWordpress /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer_bottom justify-content-center">
                    <p className="col-lg-8 col-sm-12 footer-text">
                        Copyright  &copy; {new Date().getFullYear()} to <span>Pawan Joshi</span> All rights reserved.
                    </p>
                </div>

            </div>
        </section>
    )
}
