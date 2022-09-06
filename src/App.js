import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Home/>
      <SocialLinks/>
    </div>
  );
}

export default App;
