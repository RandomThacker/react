import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    setCounter(counter + 1);
  };

  const remValue = () => {
    if (counter < 1) alert("value too low");
    else setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  );
}

export default App;
