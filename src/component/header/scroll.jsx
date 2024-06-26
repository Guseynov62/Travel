import React, { useState, useEffect } from 'react';
import '../../index.css'

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-button ${showButton ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            ^
        </button>
    );
};

export default ScrollButton;
