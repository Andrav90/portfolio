import React from 'react';
import Header from '../mobileVersion/header/Header';
import AboutMe from '../mobileVersion/aboutMe/AboutMe';
import Projects from '../mobileVersion/projects/Projects';
import ContactMe from '../mobileVersion/contactMe/ContactMe';
import Footer from '../desktopVersion/footer/Footer';
import './MobileVersion.css';

function goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function MobileVersion() {
    return (
        <div>
            <button className="go-top-btn-desktop" onClick={goToTop}>
                <i className="fa fa-angle-double-up" />
            </button>

            <Header />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
};

export default MobileVersion;