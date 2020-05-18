import React from "react";
import { useMethod } from "react-farcry";
import { add } from "./rpc-client";
import "./App.css";

function App() {
  const sum = useMethod(add, { x: 10, y: 20 });
  return <div className="App">{sum}</div>;
}

export default App;
