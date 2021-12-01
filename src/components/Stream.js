/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Menu from './Menu';
import '../tailwind.output.css';

const Stream = function Stream(props) {
  const { info } = props;
  return (
    <div className="flex-col p-8 h-screen">
      <Menu />
      <motion.h1 className="text-7xl ml-20">
        {info.title}
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={info.icon1Src}
            alt={info.icon1Alt}
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            {info.p1}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

Stream.propTypes = {
  info: PropTypes.shape({
    mainColor: PropTypes.string,
    accentColor: PropTypes.string,
    title: PropTypes.string,
    icon1Src: PropTypes.string,
    icon1Alt: PropTypes.string,
    p1: PropTypes.string,
  }),
};

Stream.defaultProps = {
  info: {
    mainColor: '',
    accentColor: '',
    title: '',
    icon1Src: '',
    icon1Alt: '',
    p1: '',
  },
};

export default Stream;
