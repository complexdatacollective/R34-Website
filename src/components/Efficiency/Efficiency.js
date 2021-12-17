/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import EfficiencyIntro from './EfficiencyIntro';
import Stream from '../Stream';
import EfficiencyPg2 from './EfficiencyPg2';

const Efficiency = function Efficiency() {
  const match = useRouteMatch();
  return (
    <Stream>
      <Switch>
        <Route exact path={match.path}>
          <EfficiencyIntro />
        </Route>
        <Route path={`${match.path}/pg2`}>
          <EfficiencyPg2 />
        </Route>
      </Switch>
    </Stream>

  );
};

export default Efficiency;
