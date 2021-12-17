/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Stream from '../Stream';
import DataQualityIntro from './DataQualityIntro';
import DataQualityPg2 from './DataQualityPg2';

const DataQuality = function DataQuality() {
  const match = useRouteMatch();
  return (
    <Stream>
      <Switch>
        <Route exact path={match.path}>
          <DataQualityIntro />
        </Route>
        <Route path={`${match.path}/pg2`}>
          <DataQualityPg2 />
        </Route>
      </Switch>
    </Stream>

  );
};

export default DataQuality;
