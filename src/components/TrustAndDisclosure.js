/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TrustAndDisclosureIntro from './TrustAndDisclosureIntro';
import Stream from './Stream';

const TrustAndDisclosure = function TrustAndDisclosure() {
  return (
    <Stream>
      <Switch>
        <Route exact path="/trust-and-disclosure">
          <TrustAndDisclosureIntro />
        </Route>
      </Switch>
    </Stream>

  );
};

export default TrustAndDisclosure;
