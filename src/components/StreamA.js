/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import Menu from './Menu';
import Blob1 from './Home-Icons/Blob1.svg';
import '../tailwind.output.css';

const StreamA = function StreamA() {
  return (
    <div className="flex-col p-8 h-screen">
      <Menu />
      <motion.h1 className="text-7xl p-8 ml-20">
        Data Quality and Utilization
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob1}
            alt="Blob Image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            DIS aim to obtain the fullest identifying
            information about sexual partners, but there
            are no standard protocols which guide partner
            elicitation – nor are there standard forms for
            recording data.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default StreamA;
