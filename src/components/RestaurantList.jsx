import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'antd';

// const [RestaurantList, setRestaurantList] = useState()

export default function RestaurantList() {
  // const [ RestaurantsList, setRestaurantsList ] = useState()
  const [restaurants, setRestaurants] = useState([]);

  console.log(restaurants);

  useEffect(() => {
    fetch('http://localhost:4050/getrestaurants')
      .then((results) => results.json())
      .then((data) => setRestaurants(data))
      .catch(console.error);
  }, [setRestaurants]);

  return (
    <section>
      <div>
        {!restaurants ? (
          <h2>Loading .. </h2>
        ) : (
          <div className="site-card-wrapper">
            <Row gutter={16}>
                {restaurants.map((restaurant) => (
                  <div key={restaurant._id}>
                    <Col span={8}>
                    <RestaurantCard restaurant={restaurant} />
              </Col>
                  </div>
                ))}
            </Row>
          </div>
        )}
      </div>
    </section>
  );
}