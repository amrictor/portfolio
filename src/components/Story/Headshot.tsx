import { useTheme } from '@mui/material';
import React from 'react';

import headshot from '../../assets/bitmoji.png';
import { darkBlue } from '../../theme';

const Headshot: React.FC = () => {
  const theme = useTheme();
  return (
    <div css={{
      ...theme.mixins.flexCentered,
      background: 'white',
      borderRadius: '50%',
      marginBottom: theme.spacing(3),
      boxShadow: `5px 5px 0px 5px ${darkBlue}`,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(0)
      },
    }}>
      <img 
        src={headshot}
        css={{
          clipPath: 'circle(49% at center)',
          maxHeight: 400,
          maxWidth: '80vw',
          [theme.breakpoints.down('lg')]: {
            maxHeight: '40vh',
          }
        }} 
      />
    </div>
  );
};

export default Headshot;