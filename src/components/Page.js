import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Page = function Page({ children }) {
  return (
    <motion.div
      className="flex flex-col h-screen justify-center content-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
