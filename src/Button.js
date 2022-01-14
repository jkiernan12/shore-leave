import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css'

function Button({content, link, colorTheme}) {
  return ( 
    <NavLink className='button-container' to={link}>
    <button className={`button__${colorTheme}`}>
    {content}
    </button>
    </NavLink>
   );
}

export default Button;