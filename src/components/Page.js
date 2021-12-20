/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const Page = function Page({ children }) {
  return (
    <div className="flex-col p-8 h-screen">
      {children}
    </div>
  );
};

export default Page;
