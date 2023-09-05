import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Expect from "./Components/Expect/Expect";
import Learn from "./Components/Learn/Learn";
import Offer from "./Components/Offer/Offer";
import MatrixCode from "./Components/MatrixCode";

import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-hidden overall__main__container">
        <MatrixCode className="absolute inset-0 overall__main__container" />
        <div className="flex flex-col">
          <Navbar />
          <Hero />
          <Expect />
          <Learn />
          <Offer />
        </div>
      </div>
    </>
  );
}

export default App;