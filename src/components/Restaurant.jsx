import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import AddLike from './AddLIke';

const { Meta } = Card;

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();

  const fetchRestaurant = () => {
    fetch('https://brunchn-api-20513.web.app/getrestaurants')
    .then((results) => results.json())
    .then((data) => {
      const newData = data.find((r) => r._id === id);
      setRestaurant(newData);
    })
    .catch(console.error);
  }

  useEffect(() => {
    fetchRestaurant();
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
        <Meta title={restaurant?.name}  />
      </Card>

      {restaurant ? <AddLike restaurant={restaurant} fetchRestaurant={fetchRestaurant} /> : ''}
      
      <h2>{restaurant?.address}</h2>
      <h2>{restaurant?.about}</h2>
      {/* <AddLike restaurant = {restaurant} /> */}
          </>
  );
}
