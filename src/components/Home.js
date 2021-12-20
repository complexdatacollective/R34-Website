import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Blob1 from './Home-Icons/Blob1.svg';
import Blob2 from './Home-Icons/Blob2.svg';
import Blob3 from './Home-Icons/Blob3.svg';
import Blob4 from './Home-Icons/Blob4.svg';

const homeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = function Home() {
  return (
    <motion.div
      className="flex-col p-8 h-screen"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1
        className="text-7xl pl-12 ml-20"
        whileTap={{ scale: 0.95 }}
      >
        Partner Services Needs Assessment
      </motion.h1>
      <div className="flex pt-12 pl-12 ml-20">
        <motion.div
          className="flex-col justify-center w-1/3"
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
          <Link to="/data-quality">
            <motion.img
              src={Blob1}
              alt="Stream A"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <Link to="/efficiency">
            <motion.img
              src={Blob2}
              alt="Stream B"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          <Link to="/trust-and-disclosure">
            <motion.img
              src={Blob3}
              alt="Stream C"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          <Link to="/resource-access">
            <motion.img
              src={Blob4}
              alt="Stream D"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
