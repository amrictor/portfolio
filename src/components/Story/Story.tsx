import React from 'react'

import Headshot from './Headshot';
import Contact from './Contact';
import { useTheme } from '@mui/material';

export const Story: React.FC = () => {
  const theme = useTheme()
  return (
    <div id='story' css={{
      ...theme.mixins.flexCentered,
      minHeight: '100vh',
      padding: '75px',
    }}>
      <div css={{
        maxWidth: 1000,
        color: 'white',
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      }}>
        <Headshot/>
        <div css={{
          maxWidth: '80vw',
          fontWeight: 500,
          [theme.breakpoints.down('md')]: {
            textAlign: 'center'
          }
        }}>
          <Contact/>
          I am a creative thinker with a background in software engineering. My degree is in Computer Science from Colorado State University and I have worked professionally in full-stack and front-end web development in recent years, but my own whims take me across multiple technical and creative disciplines. 
        </div>
      </div>
    </div>
  )
};