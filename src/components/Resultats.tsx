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
  
  

}) => {


  return (
    <div className='resultats' id='resultats'>
      
      <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop}  >
        {
          avis.map((slide) => (
            <div key={slide.id} className='photo'>
              <img src={slide.imageUrl} alt={slide.nom} className='image-slider' width={800} height={800} />
              <p className='description'>{slide.avis}</p>
            </div>
          ))
        }
      </Carousel>

    </div>
  )
}

export default Resultats
