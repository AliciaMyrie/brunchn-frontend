import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import './App.css';
import Restaurant from './components/Restaurant';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MenuBar />
        
        <Routes>
            
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
           
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
