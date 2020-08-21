import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.scss';

const LandingPage = () => (
    <div className="App">
         <div className="auth-card">
            <div>
                <h1>Agile Books</h1>
                <p>Read your books productively</p>
            </div>
            <div>
                <button>Log in/Sign up</button>
                <Link to="/demo">Demo </Link>
            </div>
        </div>
   </div>
);

export default LandingPage;
