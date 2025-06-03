import { Box, useTheme } from '@mui/material';
import React from 'react';

import Contact from './Contact';
import Headshot from './Headshot';

export const Story: React.FC = () => {
  const theme = useTheme();
  return (
    <div id='story' css={{
      ...theme.mixins.flexCentered,
      minHeight: '100vh',
      padding: '75px 100px',
      [theme.breakpoints.down('md')]: {
        padding: '75px 50px',
      },
    }}>
      <div css={{
        maxWidth: 1000,
        color: 'white',
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column'
        }
      }}>
        <Headshot/>
        <div css={{
          maxWidth: '80vw',
          fontWeight: 500,
          [theme.breakpoints.down('lg')]: {
            textAlign: 'center',
            ...theme.mixins.flexCentered,
            flexDirection: 'column',
          }
        }}>
          <h3 css={{fontWeight: 200, fontSize: 40, margin: theme.spacing(2), letterSpacing: -1}}>Abigail Rictor</h3>
          <Contact/>
          <Box m={2} textAlign={'justify'}>
            <p>
              I'm a frontend-focused full stack engineer who builds useful things — sometimes with code, sometimes with wires, and sometimes with lasers. I care about making things that are intuitive, imaginative, and genuinely helpful — whether that's a well-designed and accessible web app, a tool that makes my own life easier, or a piece of artwork that makes someone smile.
            </p>
            <p>
              My work blends technical depth with curiosity and creative problem-solving, and I'm happiest when I'm untangling complexities, learning from people who are smarter than me, and creating something new and cool at the end of the day.
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};