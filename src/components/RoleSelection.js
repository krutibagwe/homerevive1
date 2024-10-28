import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RoleSelection.css';
import userProfile from '../assets/user-placeholder.png.webp'; // Update the path as necessary
import { auth } from '../firebaseConfig'; // Import auth from Firebase
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const RoleSelection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const handleSelection = (role) => {
    navigate(`/${role}-login-signup`);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <div className="description">
            <h1>Home Revive</h1>
            <p>Connecting Local Professionals with Customers for Fast and Reliable Home Repairs</p>
          </div>
        </div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      <div className="form-container">
        <h1>Log in as?</h1>
        <button className="button" onClick={() => handleSelection('customer')}>Customer</button>
        <button className="button" onClick={() => handleSelection('provider')}>Service Provider</button>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/FAQsCustomers">FAQs for Customers</Link>
          <Link to="/FAQsProviders">FAQs for Providers</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
};

export default RoleSelection;
