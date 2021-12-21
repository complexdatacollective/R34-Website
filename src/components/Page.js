import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// const pageVariants = {
//   hidden: { y: '100vh' },
//   visible: { y: 0 },
//   exit: { y: '-100vh' },
// };

const Page = function Page({ children }) {
  return (
    <motion.div className="container mx-auto">
      {children}
    </motion.div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
