import { useState } from "react";
import "./App.css";


function App() {
  const [color, setColor] = useState("black" );

  return (
    <>
      <div className="cont" style={{ backgroundColor: color }}>
        <div className="btnCont">
          <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("plum")} style={{backgroundColor:"plum"}}>Plum</button>

        </div>
      </div>
    </>
  );
}

export default App;
