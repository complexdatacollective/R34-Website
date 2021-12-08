/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EfficiencyIntro from './EfficiencyIntro';
import Stream from './Stream';

const Efficiency = function Efficiency() {
  return (
    <Stream>
      <Switch>
        <Route exact path="/efficiency">
          <EfficiencyIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default Efficiency;
