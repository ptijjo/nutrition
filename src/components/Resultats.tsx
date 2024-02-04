"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { avis } from '@/data/Data';


interface MyCarouselProps {

  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
  infiniteLoop?: boolean;
  showArrows?: boolean;
}

const Resultats: React.FC<MyCarouselProps> = ({
  showIndicators = true,
  autoPlay = true,
  interval = 2000,
  infiniteLoop = true,
  showArrows = false,
}) => {


  return (
    <div className='resultats' id='resultats'>
      <div className='proverbe'>
        <img src="/pictures/image-nitrition/proverbe-alimentation.png" alt="" />
      </div>

      <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop} showArrows={showArrows}>
        {
          avis.map((slide) => (
            <div key={slide.id} className='photo'>
              <img src={slide.imageUrl} alt={slide.nom} className='image-slider' />
              <p className='description'>{slide.avis}</p>
            </div>
          ))
        }
      </Carousel>

    </div>
  )
}

export default Resultats
