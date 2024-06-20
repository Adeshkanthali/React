import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {

    // Access the location object
    const location = useLocation();

    // Log the location object to see its properties
    console.log(location);

    return (

        <div>

            <h1>Home Page</h1>

            <p>Current Pathname: {location.pathname}</p>

            <p>Search Query: {location.search}</p>

            <p>Hash: {location.hash}</p>

        </div>

    );
}

export default Home;
