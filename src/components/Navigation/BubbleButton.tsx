

import { IconButton, Link as MUILink } from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { TiArrowUpThick } from 'react-icons/ti';

import { primaryBlue } from '../../theme';

const pop = keyframes`
  0% {
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent;
    outline: 2px solid white;
    outline-offset: 0px;
  }
  30% {
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent;
    outline: 3px solid white;
    outline-offset: 6px;
  }
  50% {
    background: rgba(255, 255, 255, 0);
    border-color: transparent;
    transform: translateY(100px)
    outline-offset: 6px;
    outline-width: 6px;
    &::after {
      display: none;
    }
  }
  55% {
    background: rgba(255, 255, 255, 0);
    border-color: transparent;
    outline-color: transparent;
    translateY(100px)
    background: transparent;
    &:after {
      display: none;
    }
  }
  100% {
    background: rgba(255, 255, 255, 0);
    border-color: transparent;
    outline-color: transparent;
    transform: translateY(100px)
    &:after {
      display: none;
    }
    outline: none;
  }
`;

const popHighlight = keyframes`
  0% {
    display: none;
  }
  100% {
    display: none;
  }
`;

const animation = { 
  animation: `${pop} 0.5s ease`,
  animationFillMode: 'forwards',
  // transition: 'unset',
  '& svg': {
    opacity: 0,
  },
  '&:after, &:before': {
    animation: `${popHighlight} 0.5s ease`,
    animationFillMode: 'forwards',
    // transition: 'unset',
  },
};

export const BubbleButton: React.FC<{hidden: boolean}> = ({ hidden }) => {

  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
    window.scrollTo(0, 0);
  };
  
  useEffect(() => {
    if(hidden) {
      setTimeout(() => {
        setClicked(false);
      }, 200); // Transition time for moving off screen
    }
  }, [hidden]);

  return (
    <div 
      css={{
        backgroundColor: clicked ? 'rgba(0,0,0,0)' : alpha(primaryBlue, .4), 
        borderRadius: '50%', 
        padding: 2, 
        position: 'fixed', 
        bottom: 15, 
        right: 15, 
        zIndex: 1000, 
        transition: '.2s transform, .5s background-color', 
        transform: (hidden) ? 'translateY(100px)' : 'translateY(0)',
      }}
    >
      <IconButton
        onClick={onClick}
        onAnimationIteration={(event: React.AnimationEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          event.stopPropagation();
          setClicked(false);
          setTimeout(() => {
            setClicked(false);
          }, 200);
        }}
        css={[
          {
            pointerEvents: 'auto',
            // position: 'fixed',
            transition: '1s background-position',
            color: 'white',
            backgroundSize: '100% 200% !important',
            background: `linear-gradient(
              to top, 
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0) 50%
            )`,
            '&:hover': {
              backgroundPosition: 'bottom',
            },
            // bottom: 15,
            // right: 15,
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
          }, 
          clicked ? animation : {}
        ]}
        size="large"
        component={MUILink} 
      >
        <TiArrowUpThick/>
      </IconButton>
    </div>
  );
};