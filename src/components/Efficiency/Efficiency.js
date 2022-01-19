import React from 'react';
import EfficiencyIntro from './EfficiencyIntro';
import Stream from '../Stream';
import EfficiencyPg2 from './EfficiencyPg2';

const Efficiency = function Efficiency() {
  const pages = [
    {
      url: 'intro',
      component: EfficiencyIntro,
    },
    {
      url: 'page2',
      component: EfficiencyPg2,
    },
  ];

  return (
    <Stream
      pages={pages}
      color="bg-red-500"
    />
  );
};

export default Efficiency;
