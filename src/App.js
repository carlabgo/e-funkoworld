
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';

function App() {
  return (
<>
<NavBar background={'transparent'}/>
<Hero title="FUNKO WORLD"/>
<ItemListContainer greeting="Conoce nuestros productos"/>
</>
  );
}

export default App;
