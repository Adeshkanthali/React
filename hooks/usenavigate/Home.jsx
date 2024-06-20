import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToAboutPage = () => {
        navigate('/about');
    };

    return (

        <div>

            <h1>Home Page</h1>

            <button onClick={goToAboutPage}>Go to About Page</button>

        </div>

    );
}

export default Home;
