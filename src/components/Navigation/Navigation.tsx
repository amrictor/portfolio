
import { Box, useMediaQuery } from '@mui/material';
import { alpha, Theme, useTheme } from '@mui/material/styles';
import React, { useMemo } from 'react';


import useScrollPosition from '../../hooks/useScrollPosition';
import { BubbleButton } from './BubbleButton';
import { Link } from './Link';


const Title: React.FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: hidden ? 0 : 350,
      maxHeight: hidden ? 0 : 60,
      margin: hidden ? 0 : '0px 30px',      
      fontSize: 40,
      color: hidden ? 'rgba(0,0,0,0)' : 'black',
      textTransform: 'lowercase',
      fontFamily: '\'Raleway\', sans-serif',
      letterSpacing: 5,
      transition: '.8s',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '@media (max-width: 340px)': {
        fontSize: '11vw'
      }
    }} id='title'>Abigail Rictor</div>
  );
};

export const Navigation: React.FC = () => {
  const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const scrollHeight = useScrollPosition();
  const isScrolledDown = useMemo(() => scrollHeight > (0.6*window.innerHeight), [scrollHeight]);
  const theme = useTheme();

  return (
    <div id='navigation' css={{
      color: isScrolledDown ? 'white' : 'black',
      paddingTop: isScrolledDown ? 10 : 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 1200, 
      height: '80vh',
      margin: '0px auto',
      transition: '.2s',
      position: 'sticky',
      top: 0,
      zIndex: 2,
      pointerEvents: 'none',
      [theme.breakpoints.down('lg')]: {
        minHeight: 'calc(100vh - 70px)',
      },
    }}>
      {smallScreen && <Title hidden={isScrolledDown}/>}
      <Box 
        id="links" 
        css={{ 
          ...theme.mixins.flexCentered,
          flexWrap: 'wrap',
          padding: 5,
          borderRadius: 25,
          background: isScrolledDown ? alpha(theme.palette.primary.main, 0.7) : 'transparent',
          transition: '.2s',
          pointerEvents: 'auto',
        }}
      >
        <Link isScrolledDown={isScrolledDown} href='#story' >Story</Link>
        <Link isScrolledDown={isScrolledDown} href='#skills' >Focus</Link>
        {!smallScreen && <Title hidden={isScrolledDown}/>}
        <Link isScrolledDown={isScrolledDown} href='#work' >Work</Link>
        <Link isScrolledDown={isScrolledDown} href='#play' >Play</Link>
      </Box>
      <BubbleButton hidden={!isScrolledDown}/>
    </div>
  );
};