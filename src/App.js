/* eslint-disable react/jsx-filename-extension */
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import StreamA from './components/StreamA';
import StreamB from './components/StreamB';
import StreamC from './components/StreamC';
import StreamD from './components/StreamD';

const App = function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/streamA">
          <StreamA />
        </Route>
        <Route exact path="/streamB">
          <StreamB />
        </Route>
        <Route exact path="/streamC">
          <StreamC />
        </Route>
        <Route exact path="/streamD">
          <StreamD />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
