/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import Menu from './Menu';
import Blob2 from './Home-Icons/Blob2.svg';
import '../tailwind.output.css';

const StreamB = function StreamB() {
  return (
    <div className="flex-col p-8 h-screen">
      <Menu />
      <motion.h1 className="text-7xl p-8 ml-20">
        Efficiency
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob2}
            alt="Blob Image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            DIS have limited time and resources to conduct the necessary interviews.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default StreamB;
