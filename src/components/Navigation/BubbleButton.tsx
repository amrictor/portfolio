
import React, { useMemo, useState } from "react";

import { Box, IconButton, useMediaQuery, Link as MUILink } from "@mui/material";
import { alpha, keyframes, Theme, useTheme } from "@mui/material/styles";
import { TiArrowUpThick } from "react-icons/ti";

const pop = keyframes`
  0% {
    border-color: transparent;
    outline: 2px solid white;
    outline-offset: 0px;
  }
  30% {
    border-color: transparent;
    outline: 3px solid white;
    outline-offset: 6px;
    :after {
      backgroundColor: blue;
    }
  }
  50% {
    border-color: transparent;
    outline-offset: 6px;
    outline-style: dotted;
    outline-width: 6px;
    :after {
      backgroundColor: green;
    }
  }
  100% {
    border-color: transparent;
    outline: none;
  }
`

const animation = { 
  animation: `${pop} 0.5s ease infinite`,
  animationFillMode: 'forwards',
  transition: 'unset'
}
let i =0;
export const BubbleButton: React.FC<{hidden: boolean}> = ({ hidden }) => {

  const [clicked, setClicked] = useState(false);

  const onClick = (event: any) => {
    setClicked(true);
  }

  return (
    <IconButton
      onClick={onClick}
      onAnimationIteration={(event: any) => {
        event.preventDefault();
        event.stopPropagation();
        i++;
        console.log('unclicked', i, event)
        setClicked(false)
      }}
      css={[clicked ? animation : {},
        {
          position: 'fixed',
          transition: '.2s',
          transform: hidden ? 'translateY(100px)' : 'translateY(0)',
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
        }
      ]}
      size="large"
      component={MUILink} 
      href='#'
    >
      <TiArrowUpThick/>
    </IconButton>
  )
}