import { useState } from 'react'
import 'firebase/auth'
import { firebaseConfig } from '../service/firebase'
import{initializeApp} from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export default function Signup({ setUser }) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   let history = useHistory()
  const handleSignup = async (event) => {
    event.preventDefault()
    const app =  await initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const user = await createUserWithEmailAndPassword(
        auth,email,password
    )
    .catch((err)=>console.log(err))
    if (user){
        console.log(user.user)
    }
    
  }
  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="email"
        value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password"
        value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  )
}