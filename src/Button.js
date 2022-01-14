import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button({content, link, colorTheme}) {
  return ( 
    <Link className='button-container' to={link}>
    <button className={`button__${colorTheme}`}>
    {content}
    </button>
    </Link>
   );
}

export default Button;