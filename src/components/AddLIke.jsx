import React from 'react';

export default function AddLike({ restaurant, fetchRestaurant }) {
  const addLike = (e) => {
    // e.stopPropagation()
    fetch(`https://brunchn-api-20513.web.app/addlike/${restaurant._id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': token,
      },
      body: JSON.stringify({ likes: 1 }),
    })
      .then((results) => results.json())
      .then((data) => {
        fetchRestaurant()
      })
      .catch(console.error);
  };
  return (
    <div className='like-button' onClick={(e) => addLike(restaurant._id)}>
      ♡ {restaurant.likes || 0}
    </div>
  );
}
