import { useState } from 'react'
// import { useHistory } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../service/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response.user)
        setUser(response.user)
        
      })
      .catch(error => alert(error.message))
  }
  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="email"
        value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password"
        value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}