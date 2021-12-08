/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataQualityIntro from './DataQualityIntro';
import Stream from './Stream';

const DataQuality = function DataQuality() {
  return (
    <Stream>
      <Switch>
        <Route exact path="/data-quality">
          <DataQualityIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default DataQuality;
