import React from 'react';
import './Skill.css'
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import sass from '../../img/sass.png';
import node from '../../img/node.png';
import sequelize from '../../img/sequalize.png';
import mongodb from '../../img/mongodb.png';
import sql from '../../img/sql.png';
import postgres from '../../img/postgres.png';
import git from '../../img/git.png';

export const Skills = () => {
    return (
        <>
        <div className="skill__container">
            <div className="skill__container-title">
                <h2>Mis habilidades</h2>
            </div>
            <div className="skill__container-soft">
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={html} className="img_soft"></img>
                    </div>
                    HTML
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={css} className="img_soft"></img>
                    </div>
                    CSS
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={js} className="img_soft"></img>
                    </div>
                    JavaScript
                </div>
                <hr />
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={react} className="img_soft"></img>
                    </div>
                    ReactJS
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={redux} className="img_soft"></img>
                    </div>
                    Redux
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={sass} className="img_soft"></img>
                    </div>
                    SASS
                </div>
                <hr />

                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={node} className="img_soft"></img>
                    </div>
                    NodeJS
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={node} className="img_soft"></img>
                    </div>
                    Express
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={sequelize} className="img_soft"></img>
                    </div>
                    Sequelize
                </div>
                <hr />
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={mongodb} className="img_soft"></img>
                    </div>
                    MongoDB
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={sql} className="img_soft"></img>
                    </div>
                    SQL
                </div>
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={postgres} className="img_soft"></img>
                    </div>
                    PostgreSQL
                </div>
                <hr />
                <div className="soft__skill">
                    <div className="skill__img">
                        <img src={git} className="img_soft"></img>
                    </div>
                    Git
                </div>


            </div>
        </div>
        <div className="soft-white"></div>
        </>
    )
}
