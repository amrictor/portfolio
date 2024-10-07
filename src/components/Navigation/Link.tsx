import React from "react";
import { Link as MUILink } from "@mui/material";

interface LinkProps extends React.PropsWithChildren {
  // onClick?: () => void;
  href?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children}: LinkProps) => {
  return (
    <MUILink 
      // onClick={onClick}
      href={href}
      css={{
        all: 'unset', 
        fontSize: '1rem',
        fontWeight: 400,
        padding: '5px 5px 2px',
        borderRadius: '5px 5px 0 0',
        margin: '0px 25px',
        textTransform: "uppercase",
        borderBottom: '2px solid transparent',
        transition: '.2s',
        '&:hover': {
          borderColor: 'rgba(28, 134, 209, 1)',
          cursor: 'pointer',
        }
      }}
    >
      {children}
    </MUILink>
  )
}