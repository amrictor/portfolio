import React from 'react'

import { Typography, useTheme } from '@mui/material';
import { Description, Email, GitHub, LinkedIn } from '@mui/icons-material';

import resume from '../../assets/resume.pdf'
import { ContactMethod } from '../ContactMethod';


const Contact: React.FC = () => {
  const theme = useTheme();
  return (
    <div css={{
      ...theme.mixins.flexCentered,
      flexWrap: 'wrap',
      fontSize: 30,
      marginLeft: -15,
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
      },
    }}>
      <ContactMethod
        href="mailto:amrictor%40gmail.com" 
        Icon={Email}
        label="Email"
      />
      <ContactMethod 
        href={resume}
        Icon={Description}
        label="Resume"
      />
      <ContactMethod 
        href="https://linkedin.com/in/amrictor" 
        Icon={LinkedIn}
        label="LinkedIn"
      />
      <ContactMethod 
        href="https://github.com/amrictor" 
        Icon={GitHub}
        label="Github"
      />
    </div>
  );
}

export default Contact;