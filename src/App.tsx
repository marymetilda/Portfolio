import React from "react";
import BackButton from "./components/BackButton";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      {/* <BackButton /> */}
      <About />
    </div>
  );
}

export default App;
