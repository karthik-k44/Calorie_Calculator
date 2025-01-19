import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Dishes.css";

const Dishes = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user"); // Check if user is logged in

    if (!isLoggedIn) {
      setError("Please log in to view your search history.");
    } else {
      const storedSearches = JSON.parse(localStorage.getItem("searchHistory")) || [];
      setSearchHistory(storedSearches);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="dishes-container">
        <h2>Search History</h2>
        {error ? (
          <p>{error}</p>
        ) : searchHistory.length > 0 ? (
          <ul className="dishes-list">
            {searchHistory.map((item, index) => (
              <li key={index} className="dish-item">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No searches yet. Start searching!</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dishes;
