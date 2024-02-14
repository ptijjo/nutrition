import React from 'react';
import { profil } from '@/data/Data';

const Presentation: React.FC = () => {

  return (
    <div className='presentation' id='presentation'>
      <div className='photo_presentation'>
        <div className='cadre_photo'>
          <img src={profil.imageUrl} alt="Denise_Bangoura" className='photo' />
        </div>
      </div>
      <div className='about_me'>
        <span className='description'>
          <p className='paragraphe'>Coucou ! Moi , c’est Émilie Denise</p>

          <p className='paragraphe'>Je suis Ambassadrice d'un programme de RÉÉQUILIBRAGE ALIMENTAIRE 🍉🥑

            et j'ai accompagné un bon nombre de personnes peu partout à changer leur silhouette et atteindre leur objectif ! ☺</p><br/>

          
            <h3 className='sousTitre'>✅Ce en quoi je crois✅</h3>

            <p className='paragraphe'>- Adopter une alimentation saine et équilibrée 🥗</p>
            <p className='paragraphe'>⁠- Avoir une activité physique régulière 🚶🏽‍♀</p>
            <p className='paragraphe'>⁠- Atteindre son objectif ET conserver un mode de vie sain ✨</p><br/>
          

          <h3 className='sousTitre'>Alors aies confiance au process et rejoins nous !</h3><br />

          <p className='paragraphe bleu'>«Let your food be your medecine»</p>

          <p className='paragraphe bleu'>#challengeshevolve</p>
        </span>
      </div>
    </div>
  )
}

export default Presentation