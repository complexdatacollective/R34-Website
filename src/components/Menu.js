
import React, { useRef, useState } from 'react';

const Menu = function Menu() {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => setIsOpen(!isOpen);
  return (
    <div className="menu absolute top-12 left-12">
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/data-quality">Data Quality</a>
          </li>
          <li>
            <a href="/efficiency">Efficiency</a>
          </li>
          <li>
            <a href="/trust-and-disclosure">Trust and Disclosure</a>
          </li>
          <li>
            <a href="/resource-access">Resource Access</a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Menu;
