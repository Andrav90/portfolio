import React from 'react';
import Header from '../../components/header/Header';
import AboutMe from '../../components/aboutMe/AboutMe';
import Projects from '../../components/projects/Projects';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/footer/Footer';
import './Home.css';

function goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function Home() {
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

export default Home;