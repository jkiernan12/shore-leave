import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button({content, link, colorTheme, clickEvent}) {
  return (
    <>
      {link && <Link onClick={clickEvent} className='button-container' to={link}>
        <button className={`button__${colorTheme}`}>
          {content}
        </button>
      </Link> }

      {!link && <button className={`button__${colorTheme}`}>
        {content}
      </button> }
    </> 
   );
}

export default Button;