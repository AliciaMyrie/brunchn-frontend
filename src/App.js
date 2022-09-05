import RestaurantList from './components/RestaurantList';
import RemoveFavorite from './components/RemoveFavorite';
import AddRestaurant from './components/AddRestaurant';
import AddFavorite from './components/AddFavorite';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import "antd/dist/antd.min.css";
import React from 'react';
import './App.css';

function App() {
  return (
    <>

      <MenuBar />
      <Hero />
      {/* <AddFavorite /> */}
      {/* <RemoveFavorite /> */}
      <RestaurantList />
      {/* <AddRestaurant/> */}
      <Footer />
      
    </>
  );
}

export default App;
