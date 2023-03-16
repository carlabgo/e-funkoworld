import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContainer } from './components/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Hero from './components/Hero';
import Error from './components/Error';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar background={'grey'}/>
            {/* <Hero/> */}
            <Routes>
              <Route path='/' element={<Hero />}/>
              <Route path='/products' element={<ItemListContainer />} />
              <Route path="/products/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
