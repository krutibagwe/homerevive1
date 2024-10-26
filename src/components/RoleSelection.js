import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RoleSelection.css';
import userProfile from '../assets/user-placeholder.png.webp'; // Update the path as necessary
import { auth } from '../firebaseConfig'; // Import auth from Firebase

const RoleSelection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const handleSelection = (role) => {
    navigate(`/${role}-login-signup`);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
        </div>
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
