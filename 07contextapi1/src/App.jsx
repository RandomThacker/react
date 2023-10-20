import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-pink-500 text-center'>Hello worls</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
