import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); 
  const navigate = useNavigate(); 


  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername === username && storedPassword === password) {
      alert("Login Successful");
      localStorage.setItem("isLoggedIn", "true"); 
      setError("");
      navigate("/home");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };


  const handleSignUp = (e) => {
    e.preventDefault();


    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Sign Up Successful. You can now log in.");
      setIsSignUp(false);
      setUsername("");
      setPassword("");
      setError("");
    } else {
      setError("Please provide a username and password.");
    }
  };

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/home"); 
    }
  }, [navigate]);

  return (
    <div className="mainLogin">
      <div className="login-container">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="toggle-auth">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Log in" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
