import { Grid, styled, Typography, useTheme } from '@mui/material';
import React from 'react';


import { darkBlue } from '../../theme';
import { SectionHeader } from '../SectionHeader';
import { interests } from './data';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  textAlign: 'justify',
  background: darkBlue,
  color: 'white',
  borderRadius: 10,
}));

export const Skills : React.FC = () => {
  const theme = useTheme();

  return (
    <div id='skills' css={{
      minHeight: '100vh',
      ...theme.mixins.flexCentered,
      padding: '75px 100px',
      [theme.breakpoints.down('md')]: {
        padding: '75px 50px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SectionHeader>Interests</SectionHeader>
      <Grid container spacing={2} css={{
        maxWidth: 1200,
      }}>
        {Object.entries(interests).map(([interest, description]) =>
          <Grid item sm={12} md={6} lg={4}>
            <Item>
              <Typography variant='h3'>{interest}</Typography>
              <div css={{padding: theme.spacing(2)}}>{description.map(p => <p>{p}</p>)}</div>
            </Item>
          </Grid>
        )}
      </Grid>
    </div>
  );
};