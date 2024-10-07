import { Typography, useTheme } from "@mui/material";
import React from "react";

interface SoftwareBadgeProps {
  label: string;
  Icon: React.FC;
}

export const SoftwareBadge: React.FC<SoftwareBadgeProps> = ({ label, Icon }) => {
  const theme = useTheme();
  return (
    <div tabIndex={0} css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'visible',
      margin: 'auto',
      transition: '.5s ease-in-out',
      minWidth: 80,
      paddingTop: theme.spacing(1),
      '&:hover, &:focus-visible' : {
        transformOrigin: '50% 50%',
        transform: 'translate(0, -10px) scale(1.1, 1.1)',
        '& span': {
          paddingTop: -5,
          opacity: 1,
        }
      }
    }}>
        <Icon/>
        <Typography variant='caption' css={{
          transition: '.2s',
          opacity: 0,
        }}>{label}</Typography>
    </div>
  );
}