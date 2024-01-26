import React from 'react';
import { FontAwesomeIcon } from './Fonts';



const Reseau = () => {
    return (
        <div className='reseau'>
            <a href="https://www.facebook.com/chodibangs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" className='fonts' /></a>
            <a href="https://www.tiktok.com/@emiliedeniiise" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "tiktok"]} size="2x" className='fonts' /></a>
            <a href="https://www.instagram.com/emiliedeniiise" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "instagram"]} size="2x" className='fonts' /></a>
        </div>
    )
}

export default Reseau
