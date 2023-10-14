import { useState, useEffect, useRef } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [digitAllowed, setDigitAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)
 
 
  const passwordGenerator = useCallback(
    () => {
      let pass="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (digitAllowed) str += 1234567890;
      if (charAllowed) str += "!@#$%^&*()-+?_=";
      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },[
    length,
    digitAllowed,
    charAllowed,
    setPassword]
  );
  // The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated.The useCallback Hook only runs when one of its dependencies update.

const copyPassword = ()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
  // passwordRef.current?.setSelectionRange(0,3)
  // use to select the specific range of input.
  // "?" is optional selection viz jab 0 na ho input tph he select hoga
}

  useEffect(()=>{passwordGenerator()},[length, digitAllowed, charAllowed, passwordGenerator])
  //The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM,timer and for useCallback.







  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 bg-gray-700">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full  py-2 px-5 rounded-lg text-orange-700"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
           onClick={copyPassword}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(+e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id="charecterInput"
            onChange={()=> {
              setCharAllowed((prev) => !prev)
            }} 
            />
            <label htmlFor="charecterInput">Charecters</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {digitAllowed}
            id="numberInput"
            onChange={()=> {
              setDigitAllowed((prev) => !prev)
            }} 
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
