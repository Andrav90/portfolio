import React from 'react';
import checked from '../../../assets/images/checked-icon.png'

function Courses() {
    return (
        <div className="courses-container">
            <h3 className="courses-title">COURSES</h3>
            <div className="apply-flex-column" style={{ justifyContent: 'space-around', padding: '0' }}>
                <a className="courses-links" href="https://cursuri.telacad.ro/courses/course-v1:TelecomAcademy+JavaScript+2019_T1/about">
                    <img src={checked} className="courses-icons" alt="" />
                    <p className="courses-text">JS Fundamentals - Telecom Academy</p>
                </a>
                <a className="courses-links" href="https://cursuri.telacad.ro/courses">
                    <img src={checked} className="courses-icons" alt="" />
                    <p className="courses-text">JS Advanced - React - Telecom Academy</p>
                </a>
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
    );
};

export default Courses;