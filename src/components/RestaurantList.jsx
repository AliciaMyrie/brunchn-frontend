import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import "../Styles/RestaurantList.css"



export default function RestaurantList() {
 
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    fetch('https://brunchn-api-20513.web.app/getrestaurants')
      .then((results) => results.json())
      .then((data) => setRestaurants(data))
      .catch(console.error);
  }, []);

  return (
    <section className='restaurant-card-container'>
 {restaurants && restaurants.map((restaurant, index) =>  <RestaurantCard key={index} restaurant={restaurant} />)}

</section>
   
  );
}
