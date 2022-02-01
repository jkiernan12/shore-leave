import React from 'react';
import Button from '../Button/Button.js';
import './Nav.css'
import { useLocation } from 'react-router-dom'

function Nav() {
  const currentPage = useLocation()

  return ( 
    <header className='Header'>
      <h1 className='Header--logo'>Shore Leave</h1>
      <nav className='Nav'>
        {currentPage.pathname !== '/' && <Button colorTheme='primary' content='Home' link='/' />}
        {currentPage.pathname !== '/new-trip' && <Button colorTheme='secondary' content='New Trip' link='/new-trip' />}
      </nav>
    </header>
   );
}

export default Nav