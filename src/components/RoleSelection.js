import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    navigate(`/${role}-login-signup`);
  };

  return (
    <>

    
      <div className="form-container">
        <h1>Log in as?</h1>
        <button onClick={() => handleSelection('customer')}>Customer</button>
        <button onClick={() => handleSelection('provider')}>Service Provider</button>
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
