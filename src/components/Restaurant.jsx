import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import { Card } from "antd";


const { Meta } = Card;

export default function Restaurant() {
    console.log("use params",useParams())
    const { id } = useParams()
    console.log(id)
    const [restaurant, setRestaurant] = useState();
    console.log(restaurant)


  useEffect(() => {
    fetch('http://localhost:4050/getrestaurants')
      .then((results) => results.json())
      .then((data) => {
        const newData = data.find((r) => r._id === id)
        setRestaurant(newData)
    })
      .catch(console.error);
  }, [id]);

  return (
    <>
    <Card
      
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={restaurant?.photo} />}
      >
        {/* Some stuff can go here */}
        <Meta title={restaurant?.name} description={restaurant?.cuisine} />
      </Card>
    <h1>
        {/* {restaurant?.name} */}
    </h1>
    <h2>{restaurant?.address}</h2>
    <h2>{restaurant?.about}</h2> 
    
    </>
  );
}
