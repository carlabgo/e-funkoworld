
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContainer } from './components/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Hero from './components/Hero';

function App() {
  return (
<>
<CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
            <NavBar background={'transparent'}/>
            <Hero title="FUNKO WORLD"/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Conoce nuestros productos" />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
             {/*      <Route path='*' element={<ItemListContainer />}/> */}
                  {/*  // cualquier otra ruta me reenderiza este componente */}
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
</>
  );
}

export default App;
