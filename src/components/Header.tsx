import React from 'react';
import Image from 'next/image';
import Logo from "../../public/pictures/logo.png";

const Header: React.FC = () => {
  return (
    <div className='header'>
      <span className='logo-content'>
        <Image src={Logo} alt="logo juice+" className='logo' width={100} height={100} placeholder = 'blur'/>
      </span>
      <nav className='navigation'>
        <ul className='menu_nav'>
          <li><a href="#resultats" className='lien_menu' aria-label="Aller sur la page produit">Challengers</a></li>
          <li><a href="#products" className='lien_menu' aria-label="Aller sur la page produit">Produits</a></li>
          <li><a href="#contact" className='lien_menu' aria-label="Aller sur la page contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header