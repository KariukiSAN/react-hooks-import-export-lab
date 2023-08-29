import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import * as user from "/."



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
