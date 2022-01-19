import React from 'react';
import TrustAndDisclosureIntro from './TrustAndDisclosureIntro';
import Stream from '../Stream';
import TrustAndDisclosurePg2 from './TrustAndDisclosurePg2';

const TrustAndDisclosure = function TrustAndDisclosure() {
  const pages = [
    {
      url: 'intro',
      component: TrustAndDisclosureIntro,
    },
    {
      url: 'page2',
      component: TrustAndDisclosurePg2,
    },
  ];
  return (
    <Stream
      pages={pages}
      color="bg-purple-500"
    />

  );
};

export default TrustAndDisclosure;
