/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ResourceAccessIntro from './ResourceAccessIntro';
import Stream from './Stream';

const ResourceAccess = function ResourceAccess() {
  return (
    <Stream>
      <Switch>
        <Route exact path="/resource-access">
          <ResourceAccessIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default ResourceAccess;
