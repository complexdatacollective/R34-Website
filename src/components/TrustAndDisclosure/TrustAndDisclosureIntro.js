/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import Page from '../Page';
import Blob3 from '../Home-Icons/Blob3.svg';

const TrustAndDisclosureIntro = function TrustAndDisclosureIntro() {
  const history = useHistory();
  const handleScroll = () => history.push('trust-and-disclosure/pg2');
  return (
    <Page onScroll={handleScroll}>
      <motion.h1 className="text-7xl ml-20">
        Trust and Disclosure
      </motion.h1>
      <div className="flex pt-12">
        <div className="ml-20">
          <motion.img
            src={Blob3}
            alt="hero image"
            width="450"
            height="450"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-1/3 p-4 ml-40">
          <motion.p className="pt-3 text-2xl">
            DIS are split between dual roles of building rapport
            with index patients while also quickly capturing
            high-quality and complete data. Deploying a friendly
            and intuitive data capture system to conduct the interview
            may allow DIS to re-invest their energy within the
            interviews into rapport building, as well as may give
            index patients a greater sense of confidentiality.
          </motion.p>
        </div>
      </div>
    </Page>

  );
};

export default TrustAndDisclosureIntro;
