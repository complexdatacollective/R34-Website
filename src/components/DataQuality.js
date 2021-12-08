/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DataQualityIntro from './DataQualityIntro';
import Stream from './Stream';

const DataQuality = function DataQuality() {
  const match = useRouteMatch();
  return (
    <Stream>
      <Switch>
        <Route exact path={match.path}>
          <DataQualityIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default DataQuality;
