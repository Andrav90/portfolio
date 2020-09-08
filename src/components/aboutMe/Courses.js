import React from 'react';
import checked from '../../assets/images/checked-icon.png'

function Courses() {
    return (
        <div className="courses-container">
            <h3 className="courses-title">COURSES</h3>
            <ul className="apply-flex-row" style={{ justifyContent: 'space-around' }}>
                <div className="tech-used apply-flex-column">
                    <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt=""/>
                        <p className="courses-text">JavaScript Fundamentals - Telecom Academy</p>
                    </li>
                    <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">JavaScript Advanced - React - Telecom Academy</p>
                    </li>
                </div>
                <div className="tech-used apply-flex-column">
                    <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">The Web Developer Bootcamp - Udemy</p>
                    </li>
                    <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">Modern React with Redux - Udemy</p>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Courses;