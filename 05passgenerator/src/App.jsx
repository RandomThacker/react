import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [digitAllowed, setDigitAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(digitAllowed)
      str+=1234567890
    if(charAllowed)
      str+="!@#$%^&*()-+?_="
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },length,digitAllowed,charAllowed,setPassword)


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        text
        </div>    
    </>
  )
}

export default App
