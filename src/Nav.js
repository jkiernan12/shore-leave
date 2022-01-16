import React from 'react';
import Button from './Button';
import './Nav.css'

function Nav({setStage}) {
  function setStageMarina() {
    setStage('marina')
  }

  return ( 
    <header className='Header'>
      <h1 className='Header--logo'>Shore Leave</h1>
      <nav className='Nav'>
        <Button colorTheme='primary' content='Upcoming Trips' link='/' />
        <Button colorTheme='primary' content='Past Trips' link='/' />
        <Button colorTheme='secondary' content='New Trip' link='/new-trip' clickEvent={setStageMarina} />
      </nav>
    </header>
   );
}

export default Nav