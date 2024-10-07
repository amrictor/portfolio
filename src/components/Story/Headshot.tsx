import React from 'react'

import headshot from '../../assets/bitmoji.png'

import { useTheme } from '@mui/material';

const Headshot: React.FC = () => {
  const theme = useTheme();
  return (
    <div css={{
      ...theme.mixins.flexCentered,
      background: 'white',
      borderRadius: '50%',
      marginBottom: theme.spacing(3),
      boxShadow: '5px 5px 0px 5px rgba(0,0,0,0.3)',
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(0)
      },
    }}>
      <img 
        src={headshot}
        css={{
          clipPath: 'circle(49% at center)',
          maxHeight: '400px',
          maxWidth: '80vw'
        }} 
      />
    </div>
  );
}

export default Headshot;