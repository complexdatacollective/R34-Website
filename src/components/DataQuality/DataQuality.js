import React from 'react';
import Stream from '../Stream';
import DataQualityIntro from './DataQualityIntro';
import DataQualityPg2 from './DataQualityPg2';

const DataQuality = function DataQuality() {
  const pages = [
    {
      url: 'intro',
      component: DataQualityIntro,
    },
    {
      url: 'page2',
      component: DataQualityPg2,
    },
  ];

  return (
    <Stream
      pages={pages}
      color="bg-indigo-500"
    />
  );
};

export default DataQuality;
