import React, { useEffect, useRef, useState } from 'react'
import { professional } from './data';
import { CalendarToday, Link, PinDrop, Launch } from '@mui/icons-material';
import { Gallery } from '../Gallery';
import { Box, useTheme } from '@mui/material';
import { Directory } from './Directory';
import { TechBadges } from '../TechBadges/TechBadges';

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
  </Box>

export const Work: React.FC = () => {
  const [job, setJob] = useState(professional[0]);
  const jobInfoRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    if(jobInfoRef.current) {
      (jobInfoRef.current as HTMLElement).scrollTop = 0;
    }
  }, [job])
 
  return (
    <div id='work' css={{
      padding: '50px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '25px',
      }
    }}>
      <div css={{
        fontSize: 40,
        margin: '0px 30px',
        color: 'white',
        textTransform: 'lowercase',
        fontFamily: "'Raleway', sans-serif",
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
      }}>Experience</div>
      <div css={{
        alignItems: 'flex-start',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center'
        },
        flexShrink: 1,
        maxWidth: 1000,
        color: 'white',
        fontSize: 18,
      }}>
        <Directory 
          items={professional}
          formatItem={(item: any) => item.company}
          onSelect={setJob}
          selected={job}
        />
        <Box display="flex" flexDirection='column' alignItems='center' justifyContent='center'>
          <div id='job_info' css={{
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
                      maxWidth: 250,
                      [theme.breakpoints.down('sm')]: {
                        marginTop: 20
                      }
                    }} src={job.logo} alt={job.company} /> 
                  : <Box fontSize={36} fontWeight={600}>
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
              },
              overflow: 'auto',
              maxHeight: 300,
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
        </Box>
      </div>
    </div>
  );
}