import React from 'react';
import { ReactComponent as GitHub } from '../../assets/icons/social-networks/github.svg';
import { ReactComponent as Demo } from '../../assets/icons/projects/web.svg';
import { ReactComponent as Check } from '../../assets/icons/projects/checkmark.svg';
import { ReactComponent as X } from '../../assets/icons/projects/x-mark.svg';

function hideExtended5() {
    let extendedInfo5 = document.getElementsByClassName('extended-info5');
    Array.from(extendedInfo5).forEach(el => el.style.visibility = "hidden");
}

function ExtendedInfo5() {
    return (
        <div className="extended-info5 animate__animated animate__jackInTheBox" style={{ visibility: 'hidden' }}>
            <X className="close-extended" onClick={hideExtended5} />
            <p className="about-title">About</p>
            <p>This is a portfolio landing page created as a test for a front-end developer position.</p>
            <p>It is developed in vanilla JavaScript and the figures composing the background have been put together in the Lunacy program.</p>
            
            <p className="technologies-title">Technologies used</p>
            <ul>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>Vanilla JavaScript</li>
                    <li><Check className="technologies-icons"/>CSS</li>
                </div>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>HTML</li>
                    <li><Check className="technologies-icons"/>Emailjs-com</li>
                </div>
                <div className="links-container">
                    <p className="links-to-demo-title">Check it out</p>
                        <a className="links-to-demo-code" href="https://interview-project.netlify.app/"><Demo className="buttons-icons" />View demo</a>
                        <a className="links-to-demo-code" href="https://github.com/Andrav90/interview-project"><GitHub className="buttons-icons" />View source code</a>
                </div>
            </ul>
        </div>
    );
};

export default ExtendedInfo5;
