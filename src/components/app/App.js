import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/demo" component={Demo} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
