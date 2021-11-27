import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <nav>
                <NavLink to = "/home">HOME</NavLink>
                <NavLink to = "/features">FEATURES</NavLink>
                <NavLink to = "/portfolio">PORTFOLIO</NavLink>
                <NavLink to = "/resume">RESUME</NavLink>
                <NavLink to = "/clients">CLIENTS</NavLink>
                <NavLink to = "/pricing">PRICING</NavLink>
                <NavLink to = "/blog">BLOG</NavLink>
                <NavLink to = "/contact">CONTACT</NavLink>
            </nav>
        </div>
    );
};

export default Header;