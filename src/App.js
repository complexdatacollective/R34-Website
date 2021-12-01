import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import StreamA from './components/StreamA';

function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/streamA'>
            <StreamA />
          </Route>
        </Switch>
      </AnimatePresence>
  );
}

export default App;
