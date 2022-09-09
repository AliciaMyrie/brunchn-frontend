import React from "react"
import { useState } from 'react';
import { useEffect } from 'react';


export default function AddLike({restaurant}) {

const [like, setLike] = useState("");
console.log({like})
  const addLike = () => {
    fetch('http://localhost:4050/addlike/:id', {
      method: 'PATCH',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json',
        // 'Authorization': token,
      },
      body: JSON.stringify({likes: like })
    })
      .then(results => results.json())
      .then(data => {
        setLike(data);
        
      })
      .catch(console.error);
  }
  return (
    <div onClick={()=> {addLike(restaurant._id)}}>♡{restaurant.likes && 0}
    
     
    </div>
  )
}


