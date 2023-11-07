import { createContext, useState } from 'react'
import './App.css'
import C1 from './C1'

//What is context Api -
// Context api is a method used to avoid prop drilling

// There are three things in context api - 
// Create, provider, consumer

const data = createContext()
const data1 = createContext()

function App() {
  const name = "billo" 
  const caste = "dalit" 
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={caste}>
      <C1/>
      </data1.Provider>
    </data.Provider>
    </>
  )
}

export default App;
export {data,data1}
