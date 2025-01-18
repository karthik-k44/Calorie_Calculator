import React from "react";
import "../components/navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Calorie Calculator</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#scanner">QR Scanner</a>
        </li>
        <li>
          <a href="#dishes">Dishes</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <button className="navbar-button">Log In</button>
    </nav>
  );
};

export default Navbar;
