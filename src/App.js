import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/body";
import Header from "./components/header";
import KnowMore from "./components/knowmore";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<Body />} />
        <Route  path="/knowmore/:name" element={<KnowMore />} />
      </Routes>
    </div>
  );
}

export default App;
