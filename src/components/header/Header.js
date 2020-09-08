import React from 'react';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';
import Particles from '../Particles';
import './Header.css';

function scrollToAbout(){
    const aboutSection = document.querySelector('.about-me')
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header() {
    return (
        <div className="desktop-header">
            <Particles />
            <div className="header-my-name">
                <p style={{ fontFamily: 'Playball, cursive' }}>
                    Andra Vraciu
                </p>
                <hr className="header-hr" />
                <p style={{ fontFamily: 'Playball, cursive' }}>
                    Front End Web Developer
                </p>
            </div>

            <div className="header-see-work" onClick={scrollToAbout}>
                <p className="header-click-scroll" style={{ fontFamily: 'Playball, cursive' }}>Scroll down or click here to see some of my work</p>
                <DownArrow className="down-arrow" />
            </div>
        </div>
    );
};

export default Header;