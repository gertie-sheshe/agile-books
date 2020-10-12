import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './landingpage.scss';

class LandingPage extends Component {
  fetchApi = () => {
    console.log('Olaaa');
    axios
      .get('/test-route')
      .then((response) => {
        console.log('Resssponse', response);
      })
      .catch((e) => console.log('We have an error', e));
  };

  render() {
    return (
      <div className="App">
        <div className="auth-card">
          <div>
            <h1>Agile Books</h1>
            <p>Read your books productively</p>
          </div>
          <div>
            <button onClick={this.fetchApi}>Log in/Sign up</button>
            <Link to="/demo">Demo </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
