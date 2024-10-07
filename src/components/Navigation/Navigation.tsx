
import React, { useMemo } from "react";

import { Box, IconButton, useMediaQuery, Link as MUILink } from "@mui/material";
import { alpha, Theme, useTheme } from "@mui/material/styles";
import { AiOutlineToTop } from "react-icons/ai";

import { Link } from "./Link";
import useScrollPosition from "../../hooks/useScrollPosition";
import { VerticalAlignTop } from "@mui/icons-material";
import { TiArrowUpThick } from "react-icons/ti";
import { BubbleButton } from "./BubbleButton";

const Title: React.FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div css={{
      maxWidth: hidden ? 0 : 350,
      maxHeight: hidden ? 0 : 60,
      margin: hidden? 0 : '0px 30px',      
      fontSize: 40,
      textTransform: 'lowercase',
      fontFamily: "'Raleway', sans-serif",
      letterSpacing: 5,
      transition: '.8s',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '@media (max-width: 340px)': {
        fontSize: '11vw'
      }
    }} id='title'>Abigail Rictor</div>
  )
}

export const Navigation: React.FC = () => {
  const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const scrollHeight = useScrollPosition();
  const isScrolledDown = useMemo(() => scrollHeight > (0.6*window.innerHeight), [scrollHeight, window.innerHeight])
  const theme = useTheme();

  return (
    <div id='navigation' css={{
      color: isScrolledDown ? 'white' : 'black',
      paddingTop: isScrolledDown ? 10 : 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 1200, 
      margin: '0px auto  100vh',
      transition: '.2s',
      position: 'sticky',
      top: 0,
      zIndex: 2,
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
            transition: '.2s'
          }}
        >
          <Link href='#story' >Story</Link>
          <Link href='#skills' >Skills</Link>
          {!smallScreen && <Title hidden={isScrolledDown}/>}
          <Link href='#work' >Work</Link>
          <Link href='#play' >Play</Link>
        </Box>
        <BubbleButton hidden={!isScrolledDown}/>
        {/* <IconButton 
          css={{
            position: 'fixed',
            transition: '.2s',
            transform: isScrolledDown ? 'translateY(0)' : 'translateY(100px)',
            color: 'white',
            background: alpha('rgb(255,255,255)', 0.2),
            bottom: 15,
            right: 15,
            border: '3px solid white',
            '&:after': {
              position: 'fixed',
              bottom: 34,
              right: 8,
              content: '""',
              height: 3,
              width: 3,
              background: 'white',
              borderRadius: 100,
            },
            '&:before': {
              position: 'fixed',
              bottom: 38,
              right: 12,
              content: '""',
              height: 5,
              width: 5,
              background: 'white',
              borderRadius: 100,
            }
          }}
          size="large"
          component={MUILink} 
          href='#'
        ><TiArrowUpThick/></IconButton> */}
    </div>
  )
}