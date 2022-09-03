import React from 'react';
import RestaurantCard from './RestaurantCards';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Row } from 'antd';


// const [RestaurantList, setRestaurantList] = useState()

export default function RestaurantList() {
  // const [ RestaurantsList, setRestaurantsList ] = useState()
  const [restaurants, setRestaurants] = useState();

  console.log(restaurants);

  useEffect(() => {
    fetch('http://localhost:4050/getRestaurants')
      .then((results) => results.json())
      .then((data) => setRestaurants(data))
      .catch(console.error);
  }, [setRestaurants]);

  return (
    <section>
      <div>
        {!restaurants ? (
          <h2>Loading .. </h2>
        ) : 
        <div className="site-card-wrapper">
        <Row gutter={16}>
          {restaurants.map((restaurants) => 
            
            
            <Col span={8} key={restaurants._id}>
            <Card title={restaurants.name} bordered={false}>
            {restaurants.address}
            </Card>
          </Col>

          

)}
            </Row>
            </div>
}       
      </div>
    </section>
  );
}
