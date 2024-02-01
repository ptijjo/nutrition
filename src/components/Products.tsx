"use client"
import React from 'react';
import Carousel from './Carousel';
import { products } from '@/data/Data';






const Products: React.FC = ({ }) => {
 
  return (

    <div className='products' id='products'>
      <div className='products__container'>
       <Carousel slides={products} />
      </div>
    </div>
  )
};

export default Products