import React, { useState, useEffect } from 'react';
import './GoTop.css';

function GoTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const scrollThreshold = 0.2 * window.innerHeight; // 20% of the viewport height

            setIsVisible(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`go-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <span className="arrow-up">
            </span>
        </button>
    );
}

export default GoTop;
