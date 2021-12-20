import React from 'react';
import PropTypes from 'prop-types';

const Stream = function Stream({ children }) {
  return (
    <div>
      {children}
    </div>
  );
};

Stream.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Stream;
