import React from 'react'
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>ECOMMERCE</h1>
      <ul>
        <li><a href="#">Zapatillas</a></li>
        <li><a href="#">Gorras</a></li>
        <li><a href="#">Mochilas</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar