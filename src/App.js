import RestaurantList from './components/RestuarantList';
import RemoveFavorite from './components/RemoveFavorite';
import AddFavorite from './components/AddFavorite';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <>

      <MenuBar />
      <Hero />
      <AddFavorite />
      <RemoveFavorite />
      <RestaurantList />
      <Footer />
      
    </>
  );
}

export default App;
