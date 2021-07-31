import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

export const Cover = () => {
    return (
        <div className="cover__container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Cristian Mauricio Gutierrez Rivera</h1>
            <p>Full Stack Developer</p>
        </div>
    )
}
