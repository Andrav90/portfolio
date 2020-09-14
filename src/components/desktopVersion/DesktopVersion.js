import React from 'react';
import Header from '../../components/desktopVersion/header/Header';
import AboutMe from '../../components/desktopVersion/aboutMe/AboutMe';
import Projects from '../../components/desktopVersion/projects/Projects';
import ContactMe from '../../components/desktopVersion/contactMe/ContactMe';
import Footer from '../../components/desktopVersion/footer/Footer';
import './DesktopVersion.css';

function goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function DesktopVersion() {
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
    );
};

export default DesktopVersion;