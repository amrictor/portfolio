import { CalendarToday, Link, PinDrop, Launch } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';


import { Gallery } from '../Gallery';
import { SectionHeader } from '../SectionHeader';
import { TechBadges } from '../TechBadges/TechBadges';
import { professional } from './data';

interface LinkItemProps extends React.PropsWithChildren {
  Icon: React.FC;
}
const LinkItem: React.FC<LinkItemProps> = ({ Icon, children }) => 
  <Box display='flex' justifyContent='flex-end' alignItems='center'>
    {children}
    <span css={{
      color: 'rgba(28, 134, 209, 1)',
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: 32,
      marginLeft: 8,
      '& svg': {
        padding: 3,
      }
    }}>
      <Icon/>
    </span>
  </Box>;

export const Work: React.FC = () => {
  const theme = useTheme();
 
  return (
    <div id='work' css={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '75px 100px',
      [theme.breakpoints.down('md')]: {
        padding: '75px 25px',
      },
    }}>
      <SectionHeader>Experience</SectionHeader>
      <div css={{
        // alignItems: 'flex-start',
        // display: 'flex',
        // [theme.breakpoints.down('sm')]: {
        //   flexDirection: 'column',
        //   alignItems: 'center'
        // },
        // flexShrink: 1,
        maxWidth: 850,
        color: 'white',
        fontSize: 18,
      }}>
        {/* <Directory 
          items={professional}
          formatItem={(item: any) => item.company}
          onSelect={setJob}
          selected={job}
        /> */}
        {professional.map(job => <Box display="flex" flexDirection='column' alignItems='center' justifyContent='center'>
          <div id='job_info' css={{
            margin: 15,
            fontSize: 16,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 15,
            border: '2px solid white',
            background: 'white',
            color: 'black',
            padding: 25,
            [theme.breakpoints.down('sm')] :{
              marginTop: 20,
            },
            [theme.breakpoints.up('sm')]: {
              overflow: 'auto'
            },
            '& a': {
              textDecoration: 'underline'
            },
          }}>
            <div css={{
              display: 'flex',
              flexDirection: 'row-reverse',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'left',
              [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
              },
            }}>
              <div css={{
                fontSize: 14,
                fontWeight: 800,
                color: '#757575',
                alignItems: 'center',
                textAlign: 'right',
                '& div': {
                  marginBottom: 5,
                  '&:first-child': {
                    marginLeft: 0
                  }
                },
                [theme.breakpoints.down('md')]: {
                  display: 'block',
                },
              }}>
                {job.link && <LinkItem Icon={Link}>
                  <a
                    css={{
                      color: '#757575',
                      textDecoration: 'none !important',
                      '&:hover' : {
                        textDecoration: 'underline !important'
                      },
                    }} 
                    rel="noreferrer" 
                    target="_blank" 
                    href={`https://${job.link}`}
                  >{job.link}<Launch fontSize='inherit' style={{ marginLeft:2, marginBottom:6}}/></a>
                </LinkItem>}
                <LinkItem Icon={PinDrop}>{job.location}</LinkItem>
                <LinkItem Icon={CalendarToday}>{job.dates}</LinkItem>
              </div>
              <div css={{
                flexGrow: 1,
                display: 'flex',
                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  justifyContent: 'center'
                }
              }}>
                { job.logo && window.innerWidth > 350
                  ? <img css={{
                    maxWidth: 200,
                    [theme.breakpoints.down('sm')]: {
                      marginTop: 20
                    }
                  }} src={job.logo} alt={job.company} /> 
                  : <Box fontSize={28} fontWeight={600}>
                    {job.company}
                  </Box>
                }
              </div>
              
            </div>
            {job.position && <Box mt='15px' fontSize={22} fontWeight={600} textAlign='center'>
              {job.position}
            </Box>}

            {job.images && job.images.length > 0 && 
              <div css={{
                width: '100%',
                ...(job.images.length === 1 ? {
                  maxHeight: 170,
                  maxWidth: 170,
                  [theme.breakpoints.down('sm')] : {
                    width: '100%' 
                  }
                } : {})
              }}> 
                <Gallery small imageOnly data={job.images}/>
              </div>
            }  
            
            <TechBadges items={job.technologies}/>
            <div css={{
              '& ul': {
                paddingLeft: 25,
                '& li': {
                  paddingTop: 5
                }
              },
              overflow: 'auto',
              // maxHeight: 300,
              paddingRight: 10,
              '&::-webkit-scrollbar': {
                width: 12,
                padding: 2,
                margin: 10
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(28, 134, 209, 0.3)',
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                borderRadius: 15,
                // boxShadow: '5px 5px rgba(0,0,0,0.3)',
              },
            }}>
              {job.description}
            </div>
          </div>
        </Box>)}
      </div>
    </div>
  );
};