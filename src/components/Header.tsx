import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='header'>
      Logo
      <nav className='navigation'>
        <ul className='menu_nav'>
          <li><a href="#">Accueil</a></li>
          <li><a href="#products">Produits</a></li>
          <li><a href="#results">Avis</a></li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header