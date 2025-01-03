// // src/components/CustomerHomePage.js
// import React, { useState, useRef, useEffect } from 'react';
// import './CustomerHomePage.css';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import userProfile from '../assets/user-placeholder.png.webp'; // Import user profile image

// const CustomerHomePage = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Navigate to CustomerDashboard on button click
//   const handleBookServiceClick = () => {
//     navigate('/customer-dashboard'); // Redirect to Customer Dashboard
//   };

  
//   const toggleProfileDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleLogoutClick = () => {
//     navigate('/'); // Navigate to home on logout
//   };


//   return (
//     <div className="customer-home-page">
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//           <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//           <div className="profile" onClick={toggleProfileDropdown}>
//           <img src={userProfile} alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown active" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Section */}
//       <div className="customer-home-content">
//         <h2>Welcome to Home Revive</h2>
//         <div className="home-service-buttons">
//           <div className="service-card">
//             <button className="service-button" onClick={() => alert('View Past Services')}>
//               View Past Services
//             </button>
//           </div>
//           <div className="service-card">
//             <button className="service-button" onClick={handleBookServiceClick}>
//               Book a Service
//             </button>
//           </div>
//           <div className="service-card">
//             <button className="service-button" onClick={() => alert('Upcoming Services')}>
//               View Upcoming Services
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerHomePage;

// // src/components/CustomerHomePage.js
// import React, { useState, useRef, useEffect } from 'react';
// import './CustomerHomePage.css';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import userProfile from '../assets/user-placeholder.png.webp'; // Import user profile image
// import { auth } from '../firebaseConfig'; // Import auth from Firebase

// const CustomerHomePage = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     // Fetch the current user when the component mounts
//     const currentUser = auth.currentUser;
    
//     if (currentUser) {
//       console.log('Logged in User UID:', currentUser.uid); // Log the user UID to the console
//     } else {
//       console.log('No user is currently logged in.');
//     }

//     // Close the dropdown if clicked outside of it
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Navigate to CustomerDashboard on button click
//   const handleBookServiceClick = () => {
//     navigate('/customer-dashboard'); // Redirect to Customer Dashboard
//   };

//   const toggleProfileDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleLogoutClick = () => {
//     navigate('/'); // Navigate to home on logout
//   };

//   return (
//     <div className="customer-home-page">
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//           <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//           <div className="profile" onClick={toggleProfileDropdown}>
//             <img src={userProfile} alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown active" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Section */}
//       <div className="customer-home-content">
//         <h2>Welcome to Home Revive</h2>
//         <div className="home-service-buttons">
//           <div className="service-card">
//             <button className="service-button" onClick={() => alert('View Past Services')}>
//               View Past Services
//             </button>
//           </div>
//           <div className="service-card">
//             <button className="service-button" onClick={handleBookServiceClick}>
//               Book a Service
//             </button>
//           </div>
//           <div className="service-card">
//             <button className="service-button" onClick={() => alert('Upcoming Services')}>
//               View Upcoming Services
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerHomePage;


import React, { useState, useRef, useEffect } from 'react';
import './CustomerHomePage.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import { useNavigate, Link } from 'react-router-dom'; 
import userProfile from '../assets/user-placeholder.png.webp'; 
import { auth, db } from '../firebaseConfig'; // Import auth and db from Firebase
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

const CustomerHomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState(null); // State to hold user data
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const fetchUserData = async () => {
        const docSnap = await getDoc(doc(db, 'users', currentUser.uid));
        if (docSnap.exists()) {
          setUserData({ uid: currentUser.uid, pincode: docSnap.data().pincode });
        } else {
          console.log('No user data found for this UID.');
        }
      };
      fetchUserData();
    } else {
      console.log('No user is currently logged in.');
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBookServiceClick = () => {
    navigate('/customer-dashboard');
  };

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogoutClick = () => {
    // Add logout logic here
    navigate('/'); 
  };

  return (
    <div className="customer-home-page">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={toggleProfileDropdown}>
            <img src={userProfile} alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Account Settings</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Section */}
      <div className="customer-home-content">
        <h2>Welcome to Home Revive</h2>
        {userData && (
          <div>
            <p>Your UID: {userData.uid}</p>
            <p>Your Pincode: {userData.pincode}</p>
          </div>
        )}
        <div className="home-service-buttons">
          <div className="service-card">
            <button className="service-button" onClick={() => alert('View Past Services')}>
              View Past Services
            </button>
          </div>
          <div className="service-card">
            <button className="service-button" onClick={handleBookServiceClick}>
              Book a Service
            </button>
          </div>
          <div className="service-card">
            <button className="service-button" onClick={() => alert('Upcoming Services')}>
              View Upcoming Services
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
            <div className="footer-links">
                <Link to="/FAQsCustomers">FAQs for Customers</Link>
                <Link to="/FAQsProviders">FAQs for Providers</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            </footer>
    </div>
  );
};

export default CustomerHomePage;
