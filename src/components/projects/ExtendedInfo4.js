import React from 'react';
import { ReactComponent as GitHub } from '../../assets/icons/social-networks/github.svg';
import { ReactComponent as Demo } from '../../assets/icons/projects/web.svg';
import { ReactComponent as Check } from '../../assets/icons/projects/checkmark.svg';
import { ReactComponent as X } from '../../assets/icons/projects/x-mark.svg';

function hideExtended4() {
    let extendedInfo4 = document.getElementsByClassName('extended-info4');
    Array.from(extendedInfo4).forEach(el => el.style.visibility = "hidden");
}

function ExtendedInfo4() {
    return (
        <div className="extended-info4 animate__animated animate__jackInTheBox" style={{ visibility: 'hidden' }}>
            <X className="close-extended" onClick={hideExtended4} />
            <p className="about-title">About</p>
            <p>Simple music player application.</p>
            <p>Users can play a song, pause it, browse the library and choose another.</p>
            <p>My favorite feature of this project is the dynamic color of the song duration bar.</p>
            <p>I will update it in the future to add a volume bar, as well as dark mode option.</p>
            
            <p className="technologies-title">Technologies used</p>
            <ul>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>React</li>
                    <li><Check className="technologies-icons"/>React Hooks</li>
                </div>
                <div className="technologies-divs">
                    <li><Check className="technologies-icons"/>Sass</li>
                    <li><Check className="technologies-icons"/>Uuid</li>
                </div>
                <div className="links-container">
                    <p className="links-to-demo-title">Check it out</p>
                        <a className="links-to-demo-code" href="https://music-player-application.netlify.app/"><Demo className="buttons-icons" />View demo</a>
                        <a className="links-to-demo-code" href="https://github.com/Andrav90/music-player"><GitHub className="buttons-icons" />View source code</a>
                </div>
            </ul>
        </div>
    );
};

export default ExtendedInfo4;