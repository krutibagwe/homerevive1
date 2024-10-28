// src/components/ProviderLoginSignup.js
import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Adjust the import path if necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const ProviderLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [services, setServices] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Redirect to provider details page
        navigate('/serviceprovider-dashboard');
      } catch (error) {
        setError('Error logging in: ' + error.message);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'providers', user.uid), {
          name,
          surname,
          email,
          phone,
          area,
          city,
          pincode,
          state,
          aadhar,
          services,
          createdAt: new Date(),
        });

        console.log('Provider signed up and data saved:', user.uid);
        // Reset form
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setPhone('');
        setArea('');
        setCity('');
        setPincode('');
        setState('');
        setAadhar('');
        setServices('');
      } catch (error) {
        setError('Error signing up: ' + error.message);
      }
    }
    setLoading(false);
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
          {/* <Link to="/login-signup" className="nav-link">Login/Signup</Link> */}
        </nav>
      </header>

    <div className="form-container">
      <h1>{isLogin ? "Provider Login" : "Provider Signup"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
          </>
        )}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
            <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder="Aadhar Card Number" required />
            <select value={services} onChange={(e) => setServices(e.target.value)} required>
              <option value="">Select Services</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical Work">Electrician</option>
              <option value="Electronic Repairs">Electronic Repair</option>
              <option value="Carpentry">Carpentry</option>
              <option value="AC Installation and Repair">AC Repair</option>
            </select>
          </>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : (isLogin ? "Login" : "Signup")}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
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

export default ProviderLoginSignup;

