import RestaurantCard from './components/RestaurantCards';
import RemoveFavorite from './components/RemoveFavorite';
import AddFavorite from './components/AddFavorite';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Brunch'n</h1>
      <AddFavorite />
      <RemoveFavorite />
      <RestaurantCard />
      <MenuBar />
      <Header />
      <Footer />
      
    </>
  );
}

export default App;
