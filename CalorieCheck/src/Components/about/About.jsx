import React from 'react'
import Navbar from '../navbar/Navbar'
import "./About.css"
import Footer from '../footer/Footer'
const About = () => {
  return (
    <>
        <Navbar/>
        <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Calorie Tracker</strong>, your one-stop solution for managing your daily caloric intake!
      </p>
      <p>
        This project is designed to help you search for dishes and instantly access their calorie information, empowering you to make informed dietary choices. With an easy-to-use interface, our platform simplifies the process of tracking meals, ensuring a healthier lifestyle for users of all ages.
      </p>
      <h2>Features</h2>
      <ul>
        <li><strong>Sign Up & Login</strong>: Securely create an account to save and access your data anytime.</li>
        <li><strong>Calorie Information</strong>: Search for dishes and instantly view their calorie content.</li>
        <li><strong>User-Friendly Design</strong>: Navigate seamlessly with our intuitive interface.</li>
        <li><strong>Persistent Storage</strong>: Your data is saved, so it’s available even when you close the app.</li>
      </ul>
      <h2>Technology Stack</h2>
      <p>
        <strong>Frontend:</strong> React for a dynamic and responsive user interface. <br />
        <strong>Backend:</strong> Local Storage for authentication and real-time database functionality. <br />
        <strong>Deployment:</strong> Hosted on a reliable platform to ensure constant availability.
      </p>
      <p className="closing-note">
        Our goal is to promote mindful eating habits by offering a reliable tool for tracking calories in the food you love.
      </p>
    </div>
    <Footer/>
    </>
  )
}

export default About