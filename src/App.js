import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import Demo from './components/demo/demo'
import './App.css';

function App() {
  return (
    <>
      <nav>Agile Books</nav>
      <main>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/demo" component={Demo} exact />
        </Switch>
      </main>
      </>
  );
}

export default App;
