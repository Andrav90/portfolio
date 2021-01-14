import React from 'react';
import { ReactComponent as GitHub } from '../../assets/icons/social-networks/github.svg';
import { ReactComponent as Demo } from '../../assets/icons/projects/web.svg';
import { ReactComponent as Check } from '../../assets/icons/projects/checkmark.svg';
import { ReactComponent as X } from '../../assets/icons/projects/x-mark.svg';

function hideExtended1() {
    let extendedInfo1 = document.getElementsByClassName('extended-info1');
    Array.from(extendedInfo1).forEach(el => el.style.visibility = "hidden");
}

function ExtendedInfo1() {
    return (
        <div className="extended-info1 animate__animated animate__jackInTheBox" style={{ visibility: 'hidden' }}>
            <X className="close-extended" onClick={hideExtended1} />
            <p className="about-title">About</p>
            <p>This was my first complex project. It is a web-based visualization tool that I developed for an actual start-up. It is yet to be officially released.</p>
            <p>This was designed as a presentation website for the company and one of their products. It also included a report visualization tool only visible for users.</p>
            <p>It offers different visualization tools for presentation and detailed inspection.</p>
            <p>Due to the app not being online on the start-up's domain yet, I had to anonymize their information. </p>

            <p className="technologies-title">Technologies used</p>
            <ul>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>Vanilla JavaScript</li>
                    <li><Check className="technologies-icons"/>CSS</li>
                </div>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>HTML</li>
                    <li><Check className="technologies-icons"/>Drift Zoom Library</li>
                </div>
                <div className="links-container">
                    <p className="links-to-demo-title">Check it out</p>
                        <a className="links-to-demo-code" href="http://rocomandari.ro/"><Demo className="buttons-icons" />View demo</a>
                        <a className="links-to-demo-code" href="https://github.com/Andrav90/portfolio-project1"><GitHub className="buttons-icons" />View source code</a>
                </div>
            </ul>
        </div>
    );
};

export default ExtendedInfo1;