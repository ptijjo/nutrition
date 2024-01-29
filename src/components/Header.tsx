import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <span className='logo-content'>
        <img src="pictures/logo-juice.png" alt="logo juice+" className='logo'/>
      </span>
      <nav className='navigation'>
        <ul className='menu_nav'>
          <li><a href="#products">Produits</a></li>
          <li><a href="#resultats">Challengers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header