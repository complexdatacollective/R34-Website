import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Menu from './components/Menu';
import Home from './components/Home';
import DataQuality from './components/DataQuality/DataQuality';
import Efficiency from './components/Efficiency/Efficiency';
import TrustAndDisclosure from './components/TrustAndDisclosure/TrustAndDisclosure';
import ResourceAccess from './components/ResourceAccess/ResourceAccess';

const App = function App() {
  return (
    <div className="app h-screen">
      <Menu />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/data-quality" component={DataQuality} />
          <Route path="/efficiency" component={Efficiency} />
          <Route path="/trust-and-disclosure" component={TrustAndDisclosure} />
          <Route path="/resource-access" component={ResourceAccess} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
