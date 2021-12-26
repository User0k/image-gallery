import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div style={{
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <CircularProgress size={70}/>
    </div>
  );
}
