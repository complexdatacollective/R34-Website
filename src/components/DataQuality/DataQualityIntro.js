import React from 'react';
import { motion } from 'framer-motion';
import Page from '../Page';
import Blob1 from '../Home-Icons/Blob1.svg';

const DataQualityIntro = function DataQualityIntro() {
  return (
    <Page>
      <h1 className="text-7xl ml-20">
        Data Quality
      </h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob1}
            alt="hero image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <p className="pt-3 text-2xl">
            DIS aim to obtain the fullest identifying information about sexual partners,
            but there are no standard protocols which guide partner elicitation – nor are
            there standard forms for recording data.
          </p>
        </div>
      </div>
    </Page>

  );
};

export default DataQualityIntro;
