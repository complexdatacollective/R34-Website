
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import DataQuality from './components/DataQuality/DataQuality';
import Efficiency from './components/Efficiency/Efficiency';
import TrustAndDisclosure from './components/TrustAndDisclosure/TrustAndDisclosure';
import ResourceAccess from './components/ResourceAccess/ResourceAccess';
import Menu from './components/Menu';
import './tailwind.output.css';

const App = function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Menu />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/data-quality">
            <DataQuality />
          </Route>
          <Route exact path="/efficiency">
            <Efficiency />
          </Route>
          <Route exact path="/trust-and-disclosure">
            <TrustAndDisclosure />
          </Route>
          <Route exact path="/resource-access">
            <ResourceAccess />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
