import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h2 style={{ fontSize: '35px', textAlign: 'center' }}>Extensions List</h2>
      <div
        className='extensions-status-bar'
        style={{
          display: 'flex',
          marginTop: '20px',
          columnGap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='status-bar-item glass-effect'>All</div>
        <div className='status-bar-item glass-effect'>Active</div>
        <div className='status-bar-item glass-effect'>Inactive</div>
      </div>
    </header>
  );
}

export default Header;
