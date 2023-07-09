import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";


export default function Header(props) {
    return (
        <section className='header'>
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content text-center">
                        <h2>{props.headerHeading}</h2>
                        <div className="page_link">
                            <NavLink className="navbar-brand" to="/">Home</NavLink>
                            <NavLink className="navbar-brand" to="">{props.headerPageName}</NavLink>
                            {/* <a href="">Home</a> */}
                            {/* <a href="">{props.headerPageName}</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
