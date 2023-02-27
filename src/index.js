import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting="Select a Category" />}></Route>
        <Route exact path='/category/:categoryId' element={<ItemListContainer />}></Route>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);