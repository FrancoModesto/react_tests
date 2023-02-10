import React from 'react'
import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting="Aquí se cargarán los productos." />
      </main>
    </>
  )
}

export default App