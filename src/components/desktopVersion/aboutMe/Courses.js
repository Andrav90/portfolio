import React from 'react';
// import { Link } from 'react-router-dom';
import checked from '../../../assets/images/checked-icon.png'

function Courses() {
    return (
        <div className="courses-container">
            <h3 className="courses-title">COURSES</h3>
            <div className="apply-flex-row" style={{ justifyContent: 'space-around' }}>
                <div className="tech-used apply-flex-column">
                    <a className="courses-links" href="https://cursuri.telacad.ro/courses/course-v1:TelecomAcademy+JavaScript+2019_T1/about">
                        <img src={checked} className="courses-icons" alt=""/>
                        <p className="courses-text">JavaScript Fundamentals - Telecom Academy</p>
                    </a>
                    <a className="courses-links" href="?">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">JavaScript Advanced - React - Telecom Academy</p>
                    </a>
                </div>
                <div className="tech-used apply-flex-column">
                    {/* <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">The Web Developer Bootcamp - Udemy</p>
                    </li>
                    <li className="apply-flex-row">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">Modern React with Redux - Udemy</p>
                    </li> */}
                    <a className="courses-links" href="https://www.udemy.com/course/the-web-developer-bootcamp/"   >
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">The Web Developer Bootcamp - Udemy</p>
                    </a>
                    <a className="courses-links" href="https://www.udemy.com/course/react-redux/">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">Modern React with Redux - Udemy </p>
                    </a>
                </div>
            </div>

            {/* <a className="apply-flex-row" href="https://www.udemy.com/course/the-web-developer-bootcamp/" style={{ marginLeft: '30%' }}>
                <img src={checked} className="courses-icons" alt="" />
                <p className="courses-text">The Web Developer Bootcamp - Udemy</p>
            </a> */}

        </div>
    );
};

export default Courses;