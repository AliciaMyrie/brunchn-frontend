import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RemoveFavorite from './components/RemoveFavorite';
import AddRestaurant from './components/AddRestaurant';
import AddFavorite from './components/AddFavorite';
import MenuBar from './components/MenuBar';
import AddLike from './components/AddLIke';
import Hero from './components/Hero';
import Footer from './components/Footer';
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import './App.css';
import Restaurant from './components/Restaurant';
import Login from './components/Login';
import Favorites from './components/Favorites';



function App() {
  // const [user, setUser]= useState(null)
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          {/* <Switch> */}
            {/* <Route path="/" element={<Favorites />} /> */}
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            {/* <Hero /> */}
            {/* <AddFavorite /> */}
            {/* <RemoveFavorite /> */}
            {/* <Login /> */}
            {/* <AddLike /> */}
            {/* <AddRestaurant/> */}
          {/* </Switch> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
