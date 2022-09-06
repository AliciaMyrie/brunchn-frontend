import React from "react"
import { useState } from 'react';
import { useEffect } from 'react';


export default function AddLike() {

const [like, addLike] = useState('');
  const addTask = () => {
    fetch('http://localhost:4050/addlike', {
    // fetch('http://localhost:5555/tasks', {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        // 'Content-Type': 'application/json',
        // 'Authorization': token,
      },
      body: JSON.stringify({like, done: false })
    })
      .then(results => results.json())
      .then(data => {
        setTasklist(data);
        setTask('');
      })
      .catch(console.error);
  }
  return (
    <div className='add-task'>
      <Search
        value={task}
        onChange={e => setTask(e.target.value)}
        enterButton="Add"
        size='Large'
        onSearch={addTask}
      />
    </div>
  )
}


