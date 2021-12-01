/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Blob1 from './Home-Icons/Blob1.svg';
import Blob2 from './Home-Icons/Blob2.svg';
import Blob3 from './Home-Icons/Blob3.svg';
import Blob4 from './Home-Icons/Blob4.svg';
import '../tailwind.output.css';

const Home = function Home() {
  const fadeOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex-col p-8 h-screen">
      <Menu />
      <motion.h1
        className="text-7xl pl-12 ml-20"
        whileTap={{ scale: 0.95 }}
        variants={fadeOut}
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5 }}
      >
        Partner Services Needs Assessment
      </motion.h1>
      <div className="flex pt-12 pl-12 ml-20">
        <motion.div
          className="flex-col justify-center w-1/3"
          variants={fadeOut}
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl">Project Summary</h2>
          <p className="pt-3 text-lg">
            This NIH-funded project aims to
            characterize the needs of health
            departments conducting Partner
            Services through a national needs assessment, followed by a
            reconfiguration of our tool informed by these findings.
          </p>
          <p className="pt-3 text-lg">
            In 2021, we conducted 15
            interviews across 8 public health
            departments with Partner Services Staff, IT Staff, Program Directors, and
            Informatics Specialists. Explore the key findings from these interviews by
            clicking on a topic.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 ml-40 mb-10">
          <Link to="/StreamA">
            <motion.img
              src={Blob1}
              alt="Stream A"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeOut}
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            />
          </Link>

          <Link to="/StreamB">
            <motion.img
              src={Blob2}
              alt="Stream B"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeOut}
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            />
          </Link>
          <Link to="/StreamC">
            <motion.img
              src={Blob3}
              alt="Stream C"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeOut}
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            />
          </Link>
          <Link to="/StreamD">
            <motion.img
              src={Blob4}
              alt="Stream D"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeOut}
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
