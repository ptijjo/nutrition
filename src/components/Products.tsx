"use client"
import React from 'react';
import { products } from '@/data/Data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Swal from 'sweetalert2';
import Image from 'next/image';

interface MyCarouselProps {

  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
  infiniteLoop?: boolean;
  showThumbs:boolean
}

const Products: React.FC<MyCarouselProps> = ({
  showIndicators = true,
  autoPlay = true,
  interval = 2000,
  infiniteLoop = true,
  showThumbs= false
}) => {

  return (

    <div className='products' id='products'>

      <h3 className='products-titre'>QU'EST-CE QUE JUICE PLUS+</h3>
      <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop} showThumbs={showThumbs}>
        {
          products.map((slide) => (
            <div key={slide.id} className='photo' onClick={() => {
              Swal.fire({
                imageUrl: `${slide.imageDescription}`,
                imageWidth: "100%",
                //imageHeight: "100%",
                imageAlt: "Custom image",
                width: "100%",
                padding: "0",
                grow: "fullscreen"

              });
            }}>
              <Image src={slide.imageUrl} alt={slide.nom} className='image-slider' width={800} height={800}/>
              <p className='description'>{slide.description}</p>
            </div>
          ))
        }
      </Carousel>

    </div>
  )
};

export default Products