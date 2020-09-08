import React from 'react';
import ExtendedInfo1 from './ExtendedInfo1';
import ExtendedInfo2 from './ExtendedInfo2';
import ExtendedInfo3 from './ExtendedInfo3';
import project1Photo from '../../assets/images/project1.PNG';
import project2Photo from '../../assets/images/project2.PNG';
import project3Photo from '../../assets/images/project3.PNG';
import './Projects.css';

function mouseOver(e){
    let hiddenInfoBtn = "hidden-info-btn" + e.target.getAttribute('class').replace(/\D/g, '');
    let hiddenInfoBtnSelector = document.getElementsByClassName(hiddenInfoBtn);
    Array.from(hiddenInfoBtnSelector).forEach(el => el.style.visibility = "visible");
}

function mouseOut(e){
    let hiddenInfoBtn = "hidden-info-btn" + e.target.getAttribute('class').replace(/\D/g, '');
    let hiddenInfoBtnSelector = document.getElementsByClassName(hiddenInfoBtn);
    Array.from(hiddenInfoBtnSelector).forEach(el => el.style.visibility = "hidden");
}

function displayExtendedInfo(e){
    let extendedInfoDiv = "extended-info" + e.target.getAttribute('class').replace(/\D/g, '');
    let extendedInfoDivSelector = document.getElementsByClassName(extendedInfoDiv);
    Array.from(extendedInfoDivSelector).forEach(el => el.style.visibility = "visible");
    Array.from(extendedInfoDivSelector).forEach(el => el.style.opacity = "1");
    Array.from(extendedInfoDivSelector).forEach(el => el.style.animationPlayState = "running");
}

function Projects() {
    return (
        <div className="projects-bg">
            <div className="projects-container">
                <h3 className="projects-title">PROJECTS</h3>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="projects-containers">
                            <img 
                                src={project1Photo} 
                                className="projects-photos photo-p1" 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                alt="project-thumbnail"
                            />
                            <button 
                                className="hidden-info-btn1" 
                                style={{ visibility: 'hidden' }} 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                onClick={displayExtendedInfo}
                            >
                                Machine learning visualization tool
                                <br/>
                                Click here to learn more
                            </button>
                        </div>

                        <div className="projects-containers">
                            <img 
                                src={project2Photo} 
                                className="projects-photos photo-p2" 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                alt="project-thumbnail"
                            />
                            <button 
                                className="hidden-info-btn2"
                                style={{ visibility: 'hidden' }}
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut} 
                                onClick={displayExtendedInfo}
                            >
                                Online clothing shop
                                <br />
                                Click here to learn more
                            </button>
                        </div>

                        <div className="projects-containers">
                            <img 
                                src={project3Photo} 
                                className="projects-photos photo-p3" 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                alt="project-thumbnail"
                            />
                            <button 
                                className="hidden-info-btn3" 
                                style={{ visibility: 'hidden' }} 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut} 
                                onClick={displayExtendedInfo}
                            >
                                Recipes finder app
                                <br/>
                                Click here to learn more
                            </button>
                        </div>

                        <ExtendedInfo1 />
                        <ExtendedInfo2 />
                        <ExtendedInfo3 />
                    </div>

                <div className="below-projects-text">
                    <p>This is <b>some</b> of my work.</p>
                    <p>They are cross-platform and fully <b>responsive</b>.</p>
                    <p>You can also look at some <b>other smaller projects</b> on my <b>Github</b> page below.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;