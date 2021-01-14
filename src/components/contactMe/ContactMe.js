import React from 'react';
import CV from '../../assets/Andra_Vraciu_CV.pdf';
import { ReactComponent as GitHub } from '../../assets/icons/social-networks/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/social-networks/linkedin.svg';
import './ContactMe.css';

function ContactMe() {
    return (
        <div className="contact-me">
            <div className="contact-me-containers">
                <img className="contact-me-figure" src="https://api-lunacy.icons8.com/api/assets/2ed064dd-5b69-4aac-9c57-90ba7c7ba192/Scribbles.png" alt=""/>
                <h3 className="contact-me-title hvr-underline-from-center" style={{marginBottom: '25px'}}>CONTACT INFO</h3>
                <p><b>Phone: </b>0730.869.754</p>
                <p><b>Email: </b>ada.vraciu@gmail.com</p>
                <a className="cv-link" href={CV}>
                    <p><b>Curriculum Vitae</b></p>
                </a>
            </div>
            
            <div className="contact-me-containers">
                <h3 className="contact-me-title hvr-underline-from-center">SOCIAL NETWORKS</h3>
                <a className="contact-me-links" href="https://github.com/Andrav90" style={{marginLeft: '30%'}}>
                    <GitHub className="contact-me-icons animate__animated animate__headShake"/>
                    <p>andrav90</p>
                </a>
                <a className="contact-me-links" href="https://www.linkedin.com/in/andra-vraciu-0b9427165/" style={{ marginLeft: '30%' }}>
                    <LinkedIn className="contact-me-icons animate__animated animate__headShake" />
                    <p>andravraciu</p>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;