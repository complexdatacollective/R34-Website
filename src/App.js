import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import StreamA from './components/StreamA';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}>
        </Route>
        <Route exact path='/streamA' component={StreamA}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
