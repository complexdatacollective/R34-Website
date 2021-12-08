/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import Page from '../Page';
import Blob4 from '../Home-Icons/Blob4.svg';

const ResourceAccessIntro = function ResourceAccessIntro() {
  return (
    <Page>
      <motion.h1 className="text-7xl ml-20">
        Resource Access
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob4}
            alt="hero image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            DIS aim to obtain the fullest identifying information about sexual partners,
            but there are no standard protocols which guide partner elicitation – nor are
            there standard forms for recording data.
          </motion.p>
        </div>
      </div>
    </Page>

  );
};

export default ResourceAccessIntro;