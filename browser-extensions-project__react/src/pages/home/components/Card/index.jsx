import React from 'react';

function Card({ extension }) {
  return (
    <div
      className='card glass-effect'
      style={{ border: '1.5px solid rgba(255, 255, 255, 0.5)' }}
    >
      <div style={{ display: 'flex', columnGap: '20px', padding: '20px' }}>
        <div className='extension-logo'>
          <img src={extension.extensionLogo} alt='project logo' />
        </div>
        <div className='extension-details'>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>
            {extension.extensionName}
          </h3>
          <div style={{ fontSize: '16px', marginTop: '10px' }}>
            {extension.extensionSummary}
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            cursor: 'pointer',
            padding: '8px 20px',
            borderRadius: '20px',
            backgroundColor: 'hsl(225, 23%, 24%)',
            border: '1.5px solid rgba(255, 255, 255, 0.5)',
            //   width: '70px',
            textAlign: 'center',
          }}
        >
          <div style={{ transform: 'translateY(-1px)' }}>Remove</div>
        </div>
        <div
          className='toggle-switch'
          style={{
            backgroundColor: 'hsl(3, 71%, 56%)',
            width: '60px',
            cursor: 'pointer',
            borderRadius: '20px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className='toggle-switch-eyeball'
            style={{
              backgroundColor: 'white',
              color: 'white',
              width: '23px',
              borderRadius: '100%',
              height: '23px',
              marginLeft: '3px',
              textAlign: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
