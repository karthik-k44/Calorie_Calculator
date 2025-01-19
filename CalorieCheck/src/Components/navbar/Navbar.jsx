import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true"); 
  }, []);

  const toggleMenu = () => {
    setIsMobile(!isMobile); 
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); 
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Calorie Calculator</h1>
      </div>
      <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/scanner" className={({ isActive }) => (isActive ? "active-link" : "")}>
            QR Scanner
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/dishes" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Dishes
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
        <div className="mobile-auth">
          {isLoggedIn ? (
            <button className="navbar-button" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="navbar-button">Log In / Sign In</button>
            </NavLink>
          )}
        </div>
        </li>

   
      
      </ul>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobile ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>

    </nav>
  );
};

export default Navbar;
