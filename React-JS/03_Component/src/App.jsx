import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Biography from "./Biography";

function Greeting({ name }) {
  return <h3>Hello, {name}! Welcome to React with Vite.</h3>;
}
function App() {
  return (
    <>
      {/* Using the Greeting Component inline */}
      <Greeting name="Gaurav" />
      <Biography />
    </>
  );
}

export default App;