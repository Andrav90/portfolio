import React from 'react';
import { ReactComponent as DownArrow } from '../../assets/icons/header/down-arrow.svg';
import Particles from '../Particles';
import './Header.css';

function scrollToAbout(){
    const aboutSection = document.querySelector('.about-me')
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header() {
    return (
        <React.Fragment>
            <Particles />
            <div className="header">
                <div className="header-my-name">
                    <p style={{ fontFamily: 'Playball, cursive' }}>
                        Andra Vraciu
                    </p>
                    <p style={{ fontFamily: 'Playball, cursive' }}>
                        Front End Web Developer
                    </p>
                </div>
                <DownArrow className="down-arrow" onClick={scrollToAbout} />
            </div>
        </React.Fragment>
    );
};

export default Header;