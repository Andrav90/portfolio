import React from 'react';
import ExtendedInfo1 from './ExtendedInfo1';
import ExtendedInfo2 from './ExtendedInfo2';
import ExtendedInfo3 from './ExtendedInfo3';
import ExtendedInfo4 from './ExtendedInfo4';
import ExtendedInfo5 from './ExtendedInfo5';
import project1Photo from '../../assets/images/projects/project1.PNG';
import project2Photo from '../../assets/images/projects/project2.PNG';
import project3Photo from '../../assets/images/projects/project3.PNG';
import project4Photo from '../../assets/images/projects/project4.PNG';
import project5Photo from '../../assets/images/projects/project5.PNG';
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
                <img className="projects-figure" src="https://api-lunacy.icons8.com/api/assets/bbb1e11f-2e86-452d-80a2-b90d5b2b6d50/Scribbles.png" alt=""/>
                <h3 className="projects-title hvr-underline-from-center">PROJECTS</h3>
                    <div className="projects-inner-container">
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
                                >Machine learning visualization tool<br/>Click here to learn more
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
                                >Online clothing shop<br/>Click here to learn more
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
                                >Recipes finder app<br/>Click here to learn more
                            </button>
                        </div>

                        <div className="projects-containers">
                            <img 
                                src={project4Photo} 
                                className="projects-photos photo-p4"
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                alt="project-thumbnail"
                            />
                            <button 
                                className="hidden-info-btn4" 
                                style={{ visibility: 'hidden' }} 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut} 
                                onClick={displayExtendedInfo}
                                >Music Player<br/>Click here to learn more
                            </button>
                        </div>

                        <div className="projects-containers">
                            <img 
                                src={project5Photo} 
                                className="projects-photos photo-p5"
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut}
                                alt="project-thumbnail"
                            />
                            <button 
                                className="hidden-info-btn5" 
                                style={{ visibility: 'hidden' }} 
                                onMouseOver={mouseOver} 
                                onMouseOut={mouseOut} 
                                onClick={displayExtendedInfo}
                                >Portfolio Landing Page<br/>Click here to learn more
                            </button>
                        </div>
                        
                        <ExtendedInfo1 />
                        <ExtendedInfo2 />
                        <ExtendedInfo3 />
                        <ExtendedInfo4 />
                        <ExtendedInfo5 />
                    </div>

                <div className="below-projects-text">
                    <p>This is <b>some</b> of my work.</p>
                    <p>You can <b>find out more</b> about each project by hovering over and clicking the "learn more" button.</p>
                    <p>They are cross-platform and fully <b>responsive</b>.</p>
                    <p>You can also look at some <b>other smaller projects</b> on my <b>Github</b> page below.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;