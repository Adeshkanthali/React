import React from 'react';
import { useParams } from 'react-router-dom';

function AccessingParameters() {

    // Access the userId parameter from the URL
    const { userId } = useParams();

    // You can now use userId to fetch user data or display content
    return (

        <div>

            <h1>User Profile</h1>

            <p>User ID: {userId}</p>

            {/* Fetch and display user data based on userId */}

        </div>

    );
}

export default AccessingParameters;