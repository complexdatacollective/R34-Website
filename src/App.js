import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import StreamA from './components/StreamA';

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/streamA' component={StreamA}/>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
