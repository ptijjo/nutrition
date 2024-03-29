import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Reseau = () => {
    return (
        <div className='reseau'>
            <a href="https://www.tiktok.com/@emiliedeniiise" target="_blank" rel="noopener noreferrer" aria-label="lien tiktok" aria-hidden="false"><FontAwesomeIcon icon={faTiktok} className='fonts' /></a>
            <a href="https://www.facebook.com/chodibangs" target="_blank" rel="noopener noreferrer" aria-label="lien facebook" aria-hidden="false"><FontAwesomeIcon icon={faFacebook} className='fonts' /></a>
            <a href="https://www.instagram.com/emiliedeniiise/" target="_blank" rel="noopener noreferrer" aria-label="lien instagram" aria-hidden="false"><FontAwesomeIcon icon={faInstagram} className='fonts' /></a>
        </div>
    )
}

export default Reseau
