/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ResourceAccessIntro from './ResourceAccessIntro';
import Stream from '../Stream';
import ResourceAccessPg2 from './ResourceAccessPg2';

const ResourceAccess = function ResourceAccess() {
  const match = useRouteMatch();
  return (
    <Stream>
      <Switch>
        <Route exact path={match.path}>
          <ResourceAccessIntro />
        </Route>
        <Route path={`${match.path}/pg2`}>
          <ResourceAccessPg2 />
        </Route>
      </Switch>
    </Stream>

  );
};

export default ResourceAccess;
