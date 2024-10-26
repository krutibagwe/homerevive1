// src/components/AvailableProviders.js

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './AvailableProviders.css';

const AvailableProviders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pincode, service, providers = [] } = location.state || {}; // Use default empty array for providers

    console.log("Pincode:", pincode);
    console.log("Service:", service);

    return (
        <div className="providers-container">
            <h2>Available Providers</h2>
            <div className="info-header">
                <h3>Service: {service}</h3>
                <h3>Pincode: {pincode}</h3>
            </div>
            {providers.length > 0 ? (
                providers.map((provider) => (
                    <div key={provider.id} className="provider-card">
                        <h3>{provider.name}</h3>
                        <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
                        <p><strong>Contact:</strong> {provider.phone}</p>
                        <p><strong>Location:</strong> {provider.area}</p>
                        <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
                            View Details
                        </button>
                    </div>
                ))
            ) : (
                <p>No providers found for the entered pincode and selected service.</p>
            )}
        </div>
    );
};

export default AvailableProviders;
