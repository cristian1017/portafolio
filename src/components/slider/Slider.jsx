import React from 'react';
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { slides } from './Slides';
import './Slider.css';

export const Slider = () => {
    return (
        <div className="carousel__container">
            <div className="carousel__container-title">
                <h2>Mis proyectos</h2>
            </div>
            <Carousel
                plugins={[
                    'arrows',
                    'infinite',
                    'centered'
                ]}
                breakpoints= {{
                    960:{
                        plugins:[
                            {
                                resolve: slidesToShowPlugin,
                                slidesPerPage: 1,
                                arrows: false,
                                itemWidth:250,
                            }
                        ]
                    }
                }}
                slidesPerPage={3}
                animationSpeed={200}
                offset={50}
                itemWidth={400}
                slides = {slides}
            />
        </div>
    )
}
