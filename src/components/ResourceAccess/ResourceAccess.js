import React from 'react';
import ResourceAccessIntro from './ResourceAccessIntro';
import Stream from '../Stream';
import ResourceAccessPg2 from './ResourceAccessPg2';

const ResourceAccess = function ResourceAccess() {
  const pages = [
    {
      url: 'intro',
      component: ResourceAccessIntro,
    },
    {
      url: 'page2',
      component: ResourceAccessPg2,
    },
  ];
  return (
    <Stream
      pages={pages}
      color="bg-green-500"
    />

  );
};

export default ResourceAccess;
