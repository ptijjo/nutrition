import React from 'react';


const Header: React.FC = () => {
  return (
    <header className='header'>
      <span className='logo-content'>
        <img src="/pictures/logo.png" alt="logo juice+" className='logo' width={200} height={200} />
      </span>
      <nav className='navigation'>
        <ul className='menu_nav'>
          <li><a href="#resultats" className='lien_menu' aria-label="Aller sur la page produit">Challengers</a></li>
          <li><a href="#products" className='lien_menu' aria-label="Aller sur la page produit">Produits</a></li>
          <li><a href="#contact" className='lien_menu' aria-label="Aller sur la page contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header