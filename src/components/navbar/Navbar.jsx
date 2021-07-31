import React from 'react';
import './Navbar.css';

export const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className ="navbar__logo" onClick={toTheTop}>
                Cristian
            </div>
        </div>
    )
}
