import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-700 text-black p-10 rounded-xl mb-10'>Tailwind Test</h1>
    
    <Card name="Aryan" btn="click"/>
    <Card name="Saloni" btn="press"/>

    </>
  )
}

export default App
