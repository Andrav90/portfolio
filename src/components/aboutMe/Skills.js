import React from 'react';
import { ReactComponent as Firebase } from '../../assets/icons/about-me/firebase.svg';
import { ReactComponent as ReactLogo } from '../../assets/icons/about-me/react.svg';
import { ReactComponent as ReactRouter } from '../../assets/icons/about-me/react-router.svg';
import { ReactComponent as Redux } from '../../assets/icons/about-me/redux.svg';
import { ReactComponent as Bootstrap } from '../../assets/icons/about-me/bootstrap.svg';

function Skills() {
    return (
        <div className="skills">
            <h3 className="skills-title hvr-underline-from-center">SKILLS</h3>
            <div className="skills-outer-containers">
                <div className="skill-div">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        alt="skill"
                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                    />
                    <p>JavaScript</p>
                </div>
                <div className="skill-div">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        id="css"
                        alt="skill"
                        src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png"
                    />
                    <p>CSS3</p>
                </div>
                <div className="skill-div">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        alt="skill"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
                    />
                    <p>HTML5</p>
                </div>
                <div className="skill-div">
                    <Firebase className="skills-icons animate__animated animate__headShake" />
                    <p>Firebase Auth</p>
                </div>
            </div>

            <div className="skills-outer-containers" style={{marginBottom: '50px'}}>
                <div className="skill-div">
                    <ReactLogo className="skills-icons animate__animated animate__headShake" />
                    <p>React</p>
                </div>
                <div className="skill-div">
                    <ReactRouter className="skills-icons animate__animated animate__headShake" />
                    <p>React Router</p>
                </div>
                <div className="skill-div">
                    <Redux className="skills-icons animate__animated animate__headShake" />
                    <p>Redux</p>
                </div>
                <div className="skill-div">
                    <Bootstrap className="skills-icons animate__animated animate__headShake" />
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;