import React from 'react';

import  './header.css';
import  MarvelIcon from './Marvel.png';

const  Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a >
        <img className='marvel-icon' src={MarvelIcon} alt="Logo" />
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a >Comics</a>
        </li>
        <li>
          <a >Characters</a>
        </li>
        <li>
          <a >Stories</a>
        </li>
        <li>
          <a >Series</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
