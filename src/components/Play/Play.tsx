import { useTheme } from '@mui/material';
import React from 'react';


import { Gallery } from '../Gallery';
import { SectionHeader } from '../SectionHeader';
import data from './data';


export const Play: React.FC = () => {
  const theme = useTheme();
  return (
    <div id='play' css={{
      ...theme.mixins.flexCentered,
      flexDirection: 'column',
      minHeight: '100vh',
      padding: 75
    }}>
      <SectionHeader>Projects</SectionHeader>
      <Gallery data={data}/>
    </div>
  );
};