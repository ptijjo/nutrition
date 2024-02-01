"use client"
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { avis } from '@/data/Data';

const Resultats: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    return (
        <div className='resultats' id='resultats' ref={emblaRef}>
            <div className='resultats__container'>
                {avis.map((perso) => (
                    <div className='resultats__container__slide' key={perso.id}>
                        <img src={perso.imageUrl} alt={perso.nom} />
                        <p>{perso.avis}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Resultats
