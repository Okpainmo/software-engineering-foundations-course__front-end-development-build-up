import React from 'react';
import logo from '../../../assets/images/logo.svg';
import lightModeSwitch from '../../../assets/images/img-1.svg';

function Navbar() {
  ``;
  return (
    <nav className='navbar glass-effect'>
      <div>
        <img src={logo} alt='project logo' />
      </div>
      <div className='glass-effect__light-mode-switch light-mode-switch'>
        <img src={lightModeSwitch} alt='light mode switch' />
      </div>
    </nav>
  );
}

export default Navbar;
