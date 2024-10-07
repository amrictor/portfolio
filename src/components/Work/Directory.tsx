import React from 'react'

import { ButtonBase, useTheme } from '@mui/material';

interface DirectoryProps<Item> {
  items: Item[];
  selected: Item;
  onSelect: (item: Item) => void;
  formatItem: (item: Item) => string; 
}

export const Directory = <Item,>({ items, selected, onSelect, formatItem }: DirectoryProps<Item>) => {
  const theme = useTheme();
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      minWidth: 260,
      [theme.breakpoints.up('md')]: {
        marginRight:20,
        height: '65vh',
        overflow: 'auto',
      }
    }}>
      {items.map(item => 
        <ButtonBase 
          key={`${item}_link`}
          css={{
            border: '2px solid white',
            textAlign: 'right',
            transition: '.4s',
            background: selected === item ? 'white' : theme.palette.primary.main,
            color: selected === item ? theme.palette.primary.main : 'white',
            '&:hover, &:focus-visible': {
              color: theme.palette.primary.main,
              background: 'white',
              cursor: 'pointer',
            },
            '&:focus-visible' :{
              outline: '-webkit-focus-ring-color auto 1px'
            },
            padding: 5,
            margin: 2,
            fontWeight: 600
          }}
         onClick={() => onSelect(item)}
        >
          {formatItem(item)}
        </ButtonBase>)}
    </div>
  );
}