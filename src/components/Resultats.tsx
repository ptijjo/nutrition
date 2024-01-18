"use client"
import React, { useState } from 'react';
import { avis } from '@/data/Data';
import { tox } from '@/data/Data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface MyCarouselProps {

    showIndicators?: boolean;
    autoPlay?: boolean;
    interval?: number;
    infiniteLoop?: boolean;
}

const Resultats: React.FC<MyCarouselProps> = ({
    showIndicators = true,
    autoPlay = true,
    interval = 2000,
    infiniteLoop = true,
}) => {

    const [avantApres, setAvantApres] = useState(true);
    const [detox, setDetox] = useState(false);

    const HandleAvantApres = () => {
        setAvantApres(true);
        setDetox(false);
    };

    const HandleDetox = () => {
        setAvantApres(false);
        setDetox(true);
    };

    return (
        <div className='resultats' id='resultats'>
            <h2 className='titre'>Resultats</h2>

            <div className='avant_apres-detox'>
                <div className='avant_apres' onClick={HandleAvantApres}>
                    <p>Avant - Apres</p>
                </div>
                <div className='detox' onClick={HandleDetox}>
                    <p>Detox</p>
                </div>

            </div>
            {(avantApres && !detox) &&
                <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop}>
                    {
                        avis.map((slide) => (
                            <div key={slide.id} className='photo'>
                                <img src={slide.imageUrl} alt={slide.nom} />
                                <p className='description'>{slide.avis}</p>
                            </div>
                        ))
                    }
                </Carousel>

            }
            {(!avantApres && detox) &&

                <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop}>
                    {
                        tox.map((slide) => (
                            <div key={slide.id} className='photo'>
                                <img src={slide.imageUrl} alt={slide.nom} />
                                <p className='description'>{slide.description}</p>
                            </div>
                        ))
                    }
                </Carousel>

            }
        </div>
    )
}

export default Resultats
