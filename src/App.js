import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Emojis from "./Emojis";
import Calculator from "./Calculator";
import Clock from "./Clock";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Emojis />
      <Calculator />
      <Clock />
    </>
  );
}

export default App;
