import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <p className='presentation'>
                © 2024: Juice Plus+® is the owner of all rights concerning all fotos, designs and text on the website www.juiceplus.com. Juice Plus+® is a registered trademark of the The Juice Plus+® Company
            </p>

            <span className='condition-politique'>
                <a href="https://www.juiceplus.com/fr/fr/disclaimer" target="_blank" rel="noopener noreferrer" className='condition'>Condition d'utilisation</a>
                <p className='separateur'> | </p>
                <a href="https://www.juiceplus.com/fr/fr/privacy-policy" target="_blank" rel="noopener noreferrer" className='politique'>Politique de confidentialité</a>
            </span>
        </div>
    )
}

export default Footer