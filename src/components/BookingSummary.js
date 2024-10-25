// // src/components/BookingSummary.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// //import './BookingSummary.css'; // Create this CSS file for styling if needed

// const BookingSummary = () => {
//     const location = useLocation();
//     const { userUid, pincode } = location.state || { userUid: 'No UID', pincode: 'No Pincode' };

//     return (
//         <div className="booking-summary">
//             <header className="header">
//                 <div className="logo-container">
//                     <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//                     <span className="logo-text">Home Revive</span>
//                 </div>
//             </header>

//             <main>
//                 <h1>Booking Summary</h1>
//                 <p><strong>User UID:</strong> {userUid}</p>
//                 <p><strong>Pincode:</strong> {pincode}</p>
//             </main>

//             <footer className="footer">
//                 {/* Footer content, if applicable */}
//             </footer>
//         </div>
//     );
// };

// export default BookingSummary;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import './BookingSummary.css';

const BookingSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userUid, pincode } = location.state || { userUid: 'No UID', pincode: 'No Pincode' };
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const q = query(collection(db, 'providers'), where('pincode', '==', pincode));
                const querySnapshot = await getDocs(q);
                const providersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProviders(providersList);
            } catch (error) {
                console.error("Error fetching providers: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (pincode) {
            fetchProviders();
        }
    }, [pincode]);

    const toggleProfileDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleLogout = () => {
        // Your logout logic here
        navigate('/'); // Redirect to home after logout
    };

    return (
        <div className="booking-summary">
            {/* Header */}
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
                        <div className="profile-dropdown active">
                            <ul>
                                <li onClick={() => navigate('/profile')}>View Profile</li>
                                <li onClick={() => navigate('/settings')}>Account Settings</li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main>
                <h1>Booking Summary</h1>
                <p><strong>User UID:</strong> {userUid}</p>
                <p><strong>Pincode:</strong> {pincode}</p>

                {loading ? (
                    <p>Loading providers...</p>
                ) : (
                    <div>
                        <h2>Providers:</h2>
                        {providers.length > 0 ? (
                            <ul>
                                {providers.map(provider => (
                                    <li key={provider.id}>{provider.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No providers found for this pincode.</p>
                        )}
                    </div>
                )}
            </main>


            <footer className="footer">
            <div className="footer-links">
                <Link to="/FAQsCustomers">FAQs for Customers</Link>
                <Link to="/FAQsProviders">FAQs for Providers</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            <p className="footer-copy">&copy; 2024 Home Revive. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default BookingSummary;
