import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <h1>Cristian Mauricio Gutierrez</h1>
                <p>Medellín, Antioquia - Colombia</p>
            </div>
            <div className="footer__contact">
                <h3>Contactame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer__sns">
                <div className="desing-by">
                    Desing by Cristian Gutierrez
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/cristiangutierrez-fullstack/" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/cristian1017" target="_blank">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://wa.link/ranyr2" target="_blank">
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/cristian.gutierrezri/" target="_blank">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}
