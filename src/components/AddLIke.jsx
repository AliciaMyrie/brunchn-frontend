import React from "react"
import { useState } from 'react';
import { useEffect } from 'react';


export default function AddLike() {

const [like, setLike] = useState('');
  const addLike = () => {
    fetch('http://localhost:4050/addlike', {
    // fetch('http://localhost:5555/tasks', {
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
        setLike('');
      })
      .catch(console.error);
  }
  return (
    <div>
    </div>
  )
}


