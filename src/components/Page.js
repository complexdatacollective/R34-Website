import React from 'react';
import PropTypes from 'prop-types';

const Page = function Page({ children }) {
  return (
    <div className="flex-col p-8 h-screen">
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
