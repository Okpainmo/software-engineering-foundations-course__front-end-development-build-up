import React from 'react';

function Header() {
  return (
    <header
      className='header'
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <h2 style={{ fontSize: '35px', textAlign: 'center' }}>
        About Browser Extensions Project
      </h2>
    </header>
  );
}

export default Header;
