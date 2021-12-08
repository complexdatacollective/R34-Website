/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TrustAndDisclosureIntro from './TrustAndDisclosureIntro';
import Stream from '../Stream';

const TrustAndDisclosure = function TrustAndDisclosure() {
  const match = useRouteMatch();
  return (
    <Stream>
      <Switch>
        <Route exact path={match.path}>
          <TrustAndDisclosureIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default TrustAndDisclosure;
