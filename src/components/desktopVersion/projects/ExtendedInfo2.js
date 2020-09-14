import React from 'react';
import { ReactComponent as GitHub } from '../../../assets/icons/github.svg';
import { ReactComponent as Demo } from '../../../assets/icons/global.svg';
import { ReactComponent as Check } from '../../../assets/icons/checkmark.svg';
import { ReactComponent as X } from '../../../assets/icons/x-mark.svg';

function hideExtended2() {
    let extendedInfo2 = document.getElementsByClassName('extended-info2');
    Array.from(extendedInfo2).forEach(el => el.style.visibility = "hidden");
}

function ExtendedInfo2() {
    return (
        <div className="extended-info2 animate__animated animate__jackInTheBox" style={{ visibility: 'hidden' }}>
            <X className="close-extended" onClick={hideExtended2} />
            <p className="about-title">About</p>
            <p>This clothing shop was made as a final project for a React course being held at Telecom Academy, Bucharest, following a JavaScript Fundamentals course.</p>
            <p>In this project, the entire products state is stored inside Redux, as well as the user info delivered by the login implemented with the help of Firebase Authentication.</p>
            <p>The shop is pretty, realistic and fully-functional, users are able to access multiple categories, filter the products, as well as add or remove them from their cart or wishlist. The user can also login with their Google or Facebook accounts, to manage their shopping cart and favorite products.</p>

            <p className="technologies-title" style={{marginTop: '30px'}}>Technologies used</p>
            <ul className="apply-flex-row" style={{ justifyContent: 'space-around' }}>
                <div className="apply-flex-column">
                    <li><Check className="technologies-icons"/>React</li>
                    <li><Check className="technologies-icons"/>React Router</li>
                    <li><Check className="technologies-icons"/>Redux</li>
                    <li><Check className="technologies-icons"/>Redux-thunk</li>
                </div>
                <div className="apply-flex-column">
                    <li><Check className="technologies-icons"/>Firebase Auth</li>
                    <li><Check className="technologies-icons"/>Bootstrap</li>
                    <li><Check className="technologies-icons"/>CSS</li>
                    <li><Check className="technologies-icons"/>JSX</li>
                </div>
                <div className="links-container apply-flex-column">
                    <p className="links-to-demo-title">Check it out</p>
                    <a className="links-to-demo-code" href="https://womens-fashion-shop.netlify.app/"><Demo className="buttons-icons"/>View demo</a>
                    <a className="links-to-demo-code" href="https://github.com/Andrav90/telacad-project2.git"><GitHub className="buttons-icons"/>View source code</a>
                </div>
            </ul>
        </div>
    );
};

export default ExtendedInfo2;