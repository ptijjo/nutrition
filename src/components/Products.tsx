"use client"
import React, { useState } from 'react';
import { products } from '../data/Data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



interface MyCarouselProps {

  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
  infiniteLoop?: boolean;
}

/*const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 14,
  p: 4,
};*/


const Products: React.FC<MyCarouselProps> = ({
  showIndicators = true,
  autoPlay = true,
  interval = 2000,
  infiniteLoop = true,
}) => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div className='products' id='products'>
      <Carousel showIndicators={showIndicators} autoPlay={autoPlay} interval={interval} infiniteLoop={infiniteLoop}>
        {
          products.map((slide) => (
            <div key={slide.id} className='photo' onClick={handleOpen}>
              <img src={slide.imageUrl} alt={slide.nom} />
              <p className='description'>{slide.description}</p>


              <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="modal-modal-description"
                className='modal'
              >
                <Box className="box">
                  <Typography id="modal-modal-description" className='modal-description'>
                   <img src="pictures/produits/IMG-20240108-WA0007.jpg" alt="" />
                  </Typography>
                </Box>
              </Modal>


            </div>




          ))
        }
      </Carousel>

    </div>


  )
};

export default Products