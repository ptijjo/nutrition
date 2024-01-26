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
          <p className='paragraphe'>Je m'appelle Émilie </p>
          <p className='paragraphe'>J'ai accompagné des hommes et des femmes situés aux Antilles, en France & Belgique à se remettre en forme durablement !</p>
          <p className='paragraphe'>✨✅ CE EN QUOI JE CROIS ✅</p>
          <p className='paragraphe'>🥗 Une alimentation équilibrée est une alimentation PLAISIR, SAINE et GOURMANDE ; </p>
          <p className='paragraphe'>👩‍🍳 Il n'est pas nécessaire de passer des heures en cuisine ni même de cuisiner des aliments frais 100 % du temps (moi même je suis loin d'être une top chef) ;</p>
          <p className='paragraphe'>🚶‍♀️ L'activité physique est importante pour votre équilibre, votre santé et bien sûr le côté esthétique ! Cela ne veut pas dire que vous devez être des athlètes.       Marcher est déjà un excellent début !</p>
          <p className='paragraphe'>🧐 Atteindre son objectif c'est bien, mais conserver un mode de vie sain et apprendre à manger pour toute la vie c'est encore mieux (on évite l'effet yoyo! )</p>
          <p className='paragraphe'>🙏 Un accompagnement réussi, passe par une confiance, une entente et un non jugement!</p>
        </span>
      </div>
    </div>
  )
}

export default Presentation