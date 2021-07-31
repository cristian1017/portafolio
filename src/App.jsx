import React, {useState, useEffect} from 'react';
import { Cover } from './components/cover/Cover';
import { Navbar } from './components/navbar/Navbar';
import './App.css';
import { About } from './components/about/About';
import { Slider } from './components/slider/Slider';
import { Info } from './components/info/Info';
import { Footer } from './components/footer/Footer';
import { Skills } from './components/Skill/Skills';

export const App = () => {

    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [scrollHeight])


    return (
        <div className="App">
            <Navbar isScrolling={scrollHeight} />
            <Cover/>
            <About/>
            <Skills />
            <Slider />
            <Info />
            <Footer /> 
        </div>
    )
}
