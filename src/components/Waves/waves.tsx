import React from 'react';

import { darkBlue, darkerBlue, lightBlue, midBlue, primaryBlue } from '../../theme';
import { Wave } from './Wave';

export const Waves: React.FC = React.memo(() => {
  return (
    <>
      <div css={{
        background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, ${primaryBlue} 100%);`,
        position: 'absolute',
        top: 0,
        zIndex: -1,
        height: '100vh',
        width: '100vw',
      }}>
        <Wave color={lightBlue} rate={0.6} wave={70} flat={60} speed={4}/>
        <Wave color={midBlue} rate={0.35} wave={90} flat={170} speed={2}/>
        <Wave color={primaryBlue} rate={0.1} wave={60} flat={120} speed={3}/>
      </div>
      <div css={{
        zIndex: -1,
        position: 'absolute',
        bottom: 0,
      }}>
        <Wave color={darkBlue} rate={0.4} wave={50} flat={120} speed={3}/>
        <Wave color={darkerBlue} rate={0.1} wave={80} flat={70} speed={2}/>
      </div>
    </>
    
  );
});

