import React from 'react';
import checked from '../../assets/images/about-me/checked-icon.png'

function Courses() {
    return (
        <div className="courses">
            <h3 className="courses-title hvr-underline-from-center">COURSES</h3>
            <div className="courses-inner-container">
                <div>
                    <a className="courses-links" href="https://cursuri.telacad.ro/courses/course-v1:TelecomAcademy+JavaScript+2019_T1/about">
                        <img src={checked} className="courses-icons" alt=""/>
                        <p className="courses-text">JavaScript Fundamentals - Telecom Academy, Bucharest</p>
                    </a>
                    <a className="courses-links" href="?">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">JavaScript Advanced - React - Telecom Academy, Bucharest</p>
                    </a>
                </div>
                <div>
                    <a className="courses-links" href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">The Web Developer Bootcamp - Udemy</p>
                    </a>
                    <a className="courses-links" href="https://www.udemy.com/course/react-redux/">
                        <img src={checked} className="courses-icons" alt="" />
                        <p className="courses-text">Modern React with Redux - Udemy </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Courses;