import React from 'react';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import LetsTalk from './components/letsTalk/LetsTalk';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';
import './App.css';

function goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <AboutMe />
            <Projects />
            <LetsTalk />
            <ContactMe />
            <Footer />

            <button className="go-top-btn-desktop" onClick={goToTop}>
                <i className="fa fa-angle-double-up" />
            </button>
        </React.Fragment>
    );
};

export default App;