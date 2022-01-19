import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const isVertical = true;

const pageVariantsVertical = {
  hidden: { y: '100vh' },
  visible: { y: 0 },
  exit: { y: '-100vh' },
};

const pageVariantsHorizontal = {
  hidden: { x: '100vw' },
  visible: { x: 0 },
  exit: { x: '-100vw' },
};

const Page = function Page({ children }) {
  return (
    <motion.div
      className="container mx-auto"
      variants={isVertical ? pageVariantsVertical : pageVariantsHorizontal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
