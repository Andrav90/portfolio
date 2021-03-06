import React from 'react';
import Courses from './Courses';
import Skills from './Skills';
import myPicture from '../../assets/images/about-me/me.jpg';
import bulletPoint from '../../assets/images/about-me/circle.png';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me-inner-container" style={{height: '40%'}}>
                <img className="doodle" src="https://api-lunacy.icons8.com/api/assets/327c5ba1-b6cf-40e4-ad94-241b7def2a08/Scribbles.png" alt=""/>
                <img className="my-picture" alt="" src={myPicture}/>
                <div className="about-me-text-container">
                    <img className="about-me-figure" src="https://api-lunacy.icons8.com/api/assets/91b4843a-cc93-4808-9362-f81643218840/OrnamentDottedwhite.png" alt=""/>
                    <h3 className="about-me-title hvr-underline-from-center">HELLO!</h3>
                    <div className="about-me-text-div">
                        <img src={bulletPoint} className="bulletpoint" alt=""/>
                        <p className="about-me-text">My name is <b>Andra</b>. I am 23 years old and I am passionate about <b>web development</b>.</p>
                    </div>
                    <div className="about-me-text-div">
                        <img src={bulletPoint} className="bulletpoint" alt="" />
                        <p className="about-me-text">Although I got my Bachelor's and Master's Degrees in a totally different field - Public and European Administration, I wish to pursue my programming passion.</p>
                    </div>
                    <div className="about-me-text-div">
                        <img src={bulletPoint} className="bulletpoint" alt="" />
                        <p className="about-me-text">To achieve this, in late 2019 I began my journey by taking courses and spending most of my time learning programming.</p>
                    </div>
                    <div className="about-me-text-div">
                        <img src={bulletPoint} className="bulletpoint" alt="" />
                        <p className="about-me-text">Currently I am looking for a <b>paid internship</b> or a <b>junior position</b> in <b>Bucharest</b> or remote, to start my web developement career, meet new people and learn more awesome technologies.</p>
                    </div>
                    <div className="about-me-text-div">
                        <img src={bulletPoint} className="bulletpoint" alt="" />
                        <p className="about-me-text">While I'm still a beginner and there is still much to learn, I put together a few projects. Below you can learn more about <b>me</b> and <b>my projects</b>. You can also <b>test</b> them out in real-time and look at the source code.</p>
                    </div>
                </div>
            </div>
            <Courses />
            <Skills />
        </div>
    );
};

export default AboutMe;