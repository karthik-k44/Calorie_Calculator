
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Scanner from "./Components/scanner/Scanner";
import Dishes from "./Components/dishes/Dishes";
import About from "./Components/about/About";
import Navbar from "./Components/navbar/Navbar";
import LoginPage from "./Components/login/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/about" element={<About />} />
        {/* Add a default route to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  );
}

export default App;

