import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)

  const SubmitFunction = (e) => {
    e.preventDefault()
    setUser({username, password})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => e.setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => e.setPassword(e.target.value)}
      />

      <button onClick={SubmitFunction}>Submit</button>
    </div>
  );
}

export default Login;
