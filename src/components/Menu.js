/* eslint-disable react/jsx-filename-extension */
import React, { useRef, useState } from 'react';
import '../tailwind.output.css';

const Menu = function () {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => setIsOpen(!isOpen);
  return (
    <div>
      <button type="button" onClick={menuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 0 24 24"
          width="40px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <nav ref={menuRef} className={isOpen ? 'visible' : 'invisible'}>
        <ul>
          <li>
            <a href="/About">Project Description</a>
          </li>
          <li>
            <a href="/Implementation">Implementation</a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Menu;
