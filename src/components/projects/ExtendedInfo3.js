import React from 'react';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as Demo } from '../../assets/icons/global.svg';
import { ReactComponent as Check } from '../../assets/icons/checkmark.svg';
import { ReactComponent as X } from '../../assets/icons/x-mark.svg';

function hideExtended3() {
    let extendedInfo3 = document.getElementsByClassName('extended-info3');
    Array.from(extendedInfo3).forEach(el => el.style.visibility = "hidden");
}

function ExtendedInfo3() {
    return (
        <div className="extended-info3 animate__animated animate__jackInTheBox" style={{ visibility: 'hidden' }}>
            <X className="close-extended" onClick={hideExtended3} />
            <p className="about-title">About</p>
            <p>This is a simple proof-of-concept app that uses a recipes API to quickly recommend recipes to the users.</p>
            <p>Users can search for an ingredient or food in the designated search bar (e.g. berry, egg, carbonara) and a number of recipes will show up.</p>
            <p>The API does not provide the complete recipes, but instead it provides the original recipe's URL, which can be accessed by clicking on the "Detailed recipe" button.</p>

            <p className="technologies-title" style={{ marginTop: '30px' }}>Technologies used</p>
            <ul className="apply-flex-row" style={{ justifyContent: 'space-around' }}>
                <div className="apply-flex-column">
                    <li><Check className="technologies-icons" />React</li>
                    <li><Check className="technologies-icons" />CSS</li>
                </div>
                <div className="apply-flex-column">
                    <li><Check className="technologies-icons" />Recipes Api</li>
                    <li><Check className="technologies-icons" />Unique id generator - uuid</li>
                </div>
                <div className="links-container apply-flex-column">
                    <p className="links-to-demo-title">Check it out</p>
                    <a className="links-to-demo-code" href="https://recipes-api-app.netlify.app"><Demo className="buttons-icons" />View demo</a>
                    <a className="links-to-demo-code" href="https://github.com/Andrav90/portfolio-project3"><GitHub className="buttons-icons" />View source code</a>
                </div>
            </ul>
        </div>
    );
};

export default ExtendedInfo3;