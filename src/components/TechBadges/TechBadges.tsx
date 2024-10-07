import React from 'react'
import { Box } from '@mui/material';

interface TechBadgesProps {
  items: string[];
}

export const TechBadges: React.FC<TechBadgesProps> = ({ items }) => {

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' my='10px'>
      {items.map(item =>
        <div css={{
          tabIndex: 0,
          backgroundColor: 'rgba(28, 134, 209, 1)',
          color: 'white',
          fontWeight: 600,
          borderRadius: 10,
          padding: '3px 10px',
          margin: 3,
          whiteSpace: 'nowrap'
        }}>{item}</div>
      )}
    </Box>
  );
}