"use client"
import React from 'react';
import { products } from '../data/Data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface MyCarouselProps {

  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
  infiniteLoop?: boolean;
}

const Products: React.FC<MyCarouselProps> = ({
  showIndicators = true,
  autoPlay = true,
  interval = 2000,
  infiniteLoop=true,
}) => {

  return (

    <div className='products' id='products'>
      <h2>Produits</h2>
      <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop}>
        {
          products.map((slide) => (
            <div key={slide.id} className='photo'>
              <img src={slide.imageUrl} alt={slide.nom} />
              <p className='description'>{slide.description}</p>
            </div>
          ))
        }
      </Carousel>

    </div>


  )
};

export default Products