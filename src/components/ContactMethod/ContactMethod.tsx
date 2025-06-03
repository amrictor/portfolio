import { IconProps, Link, Typography, useTheme } from '@mui/material';

interface ContactMethodProps {
  Icon: React.FC<{ fontSize: IconProps['fontSize'] }>,
  label: string,
  href?: string,
}

export const ContactMethod: React.FC<ContactMethodProps> = ({href, Icon, label}) => {
  const theme = useTheme();

  return (
    <Link 
      target="_blank"
      rel="noreferrer noofpener" 
      href={href}
      css={{
        background: 'white',
        borderRadius: 10,
        padding: theme.spacing(0.5, 2),
        ...theme.mixins.flexCentered,
        margin: theme.spacing(1),
        textDecoration: 'none !important',
        transition: '.5s ease-in-out',
        '&:hover': {
          textDecoration: 'underline !important',
        }}}
    >
      <Icon css={{ marginRight: theme.spacing(1) }} fontSize='small'/>
      <Typography fontWeight={600}>{label}</Typography>
    </Link>
  );
};
