import React from 'react';
import { ReactComponent as Firebase } from '../../../assets/icons/firebase.svg';
import { ReactComponent as ReactLogo } from '../../../assets/icons/react.svg';
import { ReactComponent as ReactRouter } from '../../../assets/icons/react-router.svg';
import { ReactComponent as Redux } from '../../../assets/icons/redux.svg';
import { ReactComponent as Bootstrap } from '../../../assets/icons/bootstrap.svg';

function Skills() {
    return (
        <div>
            <h3 className="skills-title">SKILLS</h3>
            <div className="skills-containers" style={{ marginBottom: '2%' }}>
                <div className="apply-flex-column">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        alt=""
                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                    />
                    <p>JavaScript</p>
                </div>
                <div className="apply-flex-column">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        alt=""
                        style={{ width: '40px', height: '40px', marginTop: '-5px', marginBottom: '4px' }}
                        src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png"
                    />
                    <p>CSS3</p>
                </div>
                <div className="apply-flex-column">
                    <img
                        className="skills-icons animate__animated animate__headShake"
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
                    />
                    <p>HTML5</p>
                </div>
                <div className="apply-flex-column">
                    <Firebase className="skills-icons animate__animated animate__headShake" />
                    <p>Firebase Auth</p>
                </div>
            </div>

            <div className="skills-containers" style={{ marginBottom: '3%' }}>
                <div className="apply-flex-column">
                    <ReactLogo className="skills-icons animate__animated animate__headShake" />
                    <p>React</p>
                </div>
                <div className="apply-flex-column">
                    <ReactRouter className="skills-icons animate__animated animate__headShake" />
                    <p>React Router</p>
                </div>
                <div className="apply-flex-column">
                    <Redux className="skills-icons animate__animated animate__headShake" />
                    <p>Redux</p>
                </div>
                <div className="apply-flex-column">
                    <Bootstrap className="skills-icons animate__animated animate__headShake" />
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;