export const SectionHeader : React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <h2 css={{
      fontWeight: 400,
      fontSize: 40,
      margin: '0px 30px',
      color: 'white',
      textTransform: 'lowercase',
      fontFamily: '\'Raleway\', sans-serif',
      letterSpacing: 3,
      whiteSpace: 'nowrap',
      marginTop: 0,
      position: 'relative',
      paddingBottom: 15,
      '&::after': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: 1,
        width: 100
      }
    }}>{children}</h2>
  );
};