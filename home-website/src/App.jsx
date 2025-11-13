import { useState } from "react";
import Banner from "./Banner/Banner";
import Background from "./Background/Background";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Background />
      <div className="web-container">
        <Banner />
      </div>
    </>
  );
}

export default App;
