import React from 'react';
import CV from '../Andra_Vraciu_CV.pdf';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin2.svg';
import './ContactMe.css';

function ContactMe() {
    return (
        <div className="contact-me-container apply-flex-row" style={{justifyContent: 'space-around'}}>
            <div className="apply-flex-column" style={{ justifyContent: 'space-around' }}>
                <h3 className="contact-me-title" style={{marginTop: '20px', marginBottom: '30px'}}>CONTACT INFO</h3>
                <p><b>Phone: </b>0730.869.754</p>
                <p><b>Email: </b>ada.vraciu@gmail.com</p>
                <a className="cv-link" href={CV}>
                    <p><b>Curriculum Vitae</b></p>
                </a>
            </div>
            
            <div className="apply-flex-column" style={{justifyContent: 'space-around'}}>
                <h3 className="contact-me-title">SOCIAL NETWORKS</h3>
                <a className="contact-me-links" href="https://github.com/Andrav90" style={{marginLeft: '30%'}}>
                    <GitHub className="contact-me-icons animate__animated animate__headShake" />
                    <p>andrav90</p>
                </a>
                <a className="contact-me-links" href="https://www.linkedin.com/in/andra-v-0b9427165/" style={{ marginLeft: '30%' }}>
                    <LinkedIn className="contact-me-icons animate__animated animate__headShake" />
                    <p>andravraciu</p>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;