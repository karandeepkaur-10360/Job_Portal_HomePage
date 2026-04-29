import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [name, setName] = useState("Karandeep");
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <br /><br />

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h3>Parent Count: {count}</h3>

      <Child userName={name} userCount={count} />
    </div>
  );
}

export default App;
