import React from "react";
import BackButton from "./components/BackButton";
import "./App.css";
import About from "./pages/About";
import Particle from "./components/Particle";

function App() {
  return (
    <div>
      {/* <BackButton /> */}
      <About />
      <Particle
        onHoverInteractivity={false}
        shouldEnableLinks={false}
        particleColor="#ffffff"
        linkColor="#ffffff"
        bgColor="#000000"
      />
    </div>
  );
}

export default App;
