import React from 'react'
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage() {
  return ( 
    <div>
      <Nav />
      <main>
       <h2 className='Error--message'>Whoops, we couldn't find what you were looking for. Why not return to the <Link to='/'>home page</Link>?</h2>
      </main>
    </div>
   );
}

export default ErrorPage;