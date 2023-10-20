import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-pink-500 text-center'>Hello worls</h1>
    </UserContextProvider>
  )
}

export default App
