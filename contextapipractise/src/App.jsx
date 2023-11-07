import { createContext, useState } from 'react'
import './App.css'
import C1 from './C1'

//What is context Api -
// Context api is a method used to avoid prop drilling

// There are three things in context api - 
// Create, provider, consumer

const data = createContext()

function App() {
  const name = "hello"  
  return (
    <>
    <data.Provider>
      <C1/>
    </data.Provider>
    </>
  )
}

export default App
