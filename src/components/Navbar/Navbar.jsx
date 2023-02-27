import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav>
      <Link to={'/'} className='brand'><h1>ecoMMerce</h1></Link>
      <ul>
        <li><Link to={'/category/electronics'}>Electronics</Link></li>
        <li><Link to={'/category/jewelery'}>Jewelery</Link></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar