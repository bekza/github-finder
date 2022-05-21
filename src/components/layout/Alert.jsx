import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  if (alert !== null) {
    return (
      <p className='plfex item-start mb-4 space-x-2'>
        {alert.type === 'error' && <span style={{ color: 'red' }}>Error:</span>}
        <span className='flex-1 text-base font-semibold leading-7'>
          {alert.msg}
        </span>
      </p>
    );
  }
}

export default Alert;
