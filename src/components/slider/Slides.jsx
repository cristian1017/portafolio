import React from 'react';
import './Slider.css';
import pos from '../../img/portada.png';
import home from '../../img/homeCalendar.png';
import heroes from '../../img/heroesApp.png'



const slideInfo = [
    {
        src: pos,
        alt: "Proyecto 1",
        desc: "Pokemon App",
        git: "PI-Pokemon-14a"
    },
    {
        src: home,
        alt: "Proyecto 2",
        desc: "Calendario App",
        git: "MERN-Calendar-Front"
    },
    {
        src: heroes,
        alt: "Proyecto 3",
        desc: "Heroes App",
        git: "Heroes-App",
        deploy: "https://cristian1017.github.io/Heroes-App/"
    },
   
]

export const slides = slideInfo.map((slide) => (
    <div className="slide__container">
        <img src={slide.src} alt={slide.alt} />

        
        <div className="slide__desc">
            <span><a href={`https://github.com/cristian1017/${slide.git}`}>{slide.desc} - Link GitHub</a></span>
        </div>
    </div>
))