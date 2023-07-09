import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = window.innerHeight * 0.0; // 20% of the page height

            setIsSticky(scrollPosition > scrollThreshold);
            setIsHidden(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
      setShowNav(!showNav);
    };
  
    const hideMenu = () => {
      setShowNav(false);
    };

    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isSticky ? 'sticky' : ''} ${isHidden ? 'hidden' : ''}`}>

            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="images/logo.webp" alt="Logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/"  onClick={hideMenu}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/about"  onClick={hideMenu}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/services"  onClick={hideMenu}>
                                SERVICES
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/portfolio"  onClick={hideMenu}>
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/blog"  onClick={hideMenu}>
                                BLOG
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="/contact"  onClick={hideMenu}>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;

// const navActive = window.location.pathname;
// // const navLinks = document.querySelectorAll('nav .container ul li a').forEach(link => {
// //     if (link.href.includes(`${navActive}`)) {
// //         link.classList.add('active');
// //     }
// // }
// // )



