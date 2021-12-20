
import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import Page from '../Page';
import Blob2 from '../Home-Icons/Blob2.svg';

const EfficiencyIntro = function EfficiencyIntro() {
  const history = useHistory();
  const handleScroll = () => history.push('efficiency/pg2');
  return (
    <Page onScroll={handleScroll}>
      <motion.h1 className="text-7xl ml-20">
        Efficiency
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob2}
            alt="hero image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            DIS have limited time and resources to conduct the
            necessary interviews – and a substantial portion of
            their time is devoted to entering data back into case
            management systems after they conduct interviews.
          </motion.p>
        </div>
      </div>
    </Page>

  );
};

export default EfficiencyIntro;
