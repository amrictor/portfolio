import { Typography, useTheme } from "@mui/material";

interface ContactMethodProps {
  Icon: React.FC,
  label: string,
  href?: string,
}

export const ContactMethod: React.FC<ContactMethodProps> = ({href, Icon, label}) => {
  const theme = useTheme();
  return (
    <a 
      target="_blank" 
      rel="noreferrer noopener" 
      href={href}
      css={{
        ...theme.mixins.flexCentered,
        // paddingTop: theme.spacing(1),
        flexDirection: 'column',
        width: 65,
        transition: '.5s ease-in-out',
        textDecoration: 'none !important',
        '&:hover, &:focus-visible': {
          transformOrigin: '50% 50%',
          transform: 'translate(0, -15px) scale(1.1, 1.1)', 
        }
      }}
    >
      <span
        css={{
          ...theme.mixins.flexCentered,
          background: 'rgba(255,255,255,1)',
          color: 'rgb(28,134,209)', 
          height: 35,
          width: 35,
          borderRadius: '50%',
        }}
      ><Icon/></span>
      <Typography variant='caption' css={{
        transition: '.2s',
        opacity: 0,
        'a:hover &, a:focus-visible  &': {
          paddingTop: -5,
          opacity: 1,
        }
      }}>{label}</Typography>
    </a>
  );
}
