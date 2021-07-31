import React from 'react';
import perfil from '../../img/perfil.jpg';
import './About.css';

export const About = () => {
    return (
        <div className="about__container">
            <div className="about__container-desc">
                <h3>Hola, soy Cristian!</h3>
                <p>Soy un ingeniero de software y Full Stack Developer, capaz de desarrollar una aplicación web completa, desde el modelado de los datos y la implementación del backend, hasta el desarrollo e implementación del frontend, apasionado por las tecnologías web. Soy autodidacta, curioso, proactivo y apasionado por la tecnología, que quiere contribuir al desarrollo de su región a través de la tecnología y la ingeniería de software.</p>
            </div>
            <div className="about__container-img">
                <img
                    src={perfil}
                    className="img"
                    // src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
                    alt="Acerca de mi"
                />
            </div>
        </div>
    )
}
