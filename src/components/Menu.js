import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data-quality">Data Quality</Link>
          </li>
          <li>
            <Link to="/efficiency">Efficiency</Link>
          </li>
          <li>
            <Link to="/trust-and-disclosure">Trust and Disclosure</Link>
          </li>
          <li>
            <Link to="/resource-access">Resource Access</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Menu;
