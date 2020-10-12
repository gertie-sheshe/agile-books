import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../landing-page/landingpage';
import Demo from '../demo/demo';
import './App.scss';

function App() {
  return (
    <>
      <nav>
        <h1>Agile Books</h1>
      </nav>
      <main>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/demo" component={Demo} exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
