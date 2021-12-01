/* eslint-disable react/jsx-filename-extension */
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Stream from './components/Stream';
import {
  StreamAInfo, StreamBInfo, StreamCInfo, StreamDInfo,
} from './components/StreamInfo';

const App = function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/streamA">
          <Stream info={StreamAInfo} />
        </Route>
        <Route exact path="/streamB">
          <Stream info={StreamBInfo} />
        </Route>
        <Route exact path="/streamC">
          <Stream info={StreamCInfo} />
        </Route>
        <Route exact path="/streamD">
          <Stream info={StreamDInfo} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
