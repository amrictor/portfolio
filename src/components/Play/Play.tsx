import React from 'react';
import data from './data';
import { useTheme } from '@mui/material';
import { Gallery } from '../Gallery';


export const Play: React.FC = () => {
  const theme = useTheme();
  return (
    <div id='play' css={{
      ...theme.mixins.flexCentered,
      flexDirection: 'column',
      minHeight: '100vh',
      padding: 75
    }}>
      <div css={{
        fontSize: 40,
        margin: '0px 30px',
        color: 'white',
        textTransform: 'lowercase',
        fontFamily: "'Raleway', sans-serif",
        letterSpacing: 3,
        whiteSpace: 'nowrap',
        marginTop: 0,
        position: 'relative',
        paddingBottom: 15,
        '&::after': {
          content: '',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 1,
          width: 100
        }
      }}>Projects</div>
      <Gallery data={data}/>
    </div>
  )
};