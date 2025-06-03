
import { Description, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Grid, useTheme } from '@mui/material';

import React from 'react';
import resume from '../../assets/resume.pdf';
import { ContactMethod } from '../ContactMethod';



const Contact: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid 
      css={{ 
        maxWidth: 450,
        margin: theme.spacing(1, 0)
      }} 
      container
    >
      <Grid item xs={6} md={3}>
        <ContactMethod
          href="mailto:amrictor@gmail.com" 
          Icon={Email}
          label="Email"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <ContactMethod 
          href={resume}
          Icon={Description}
          label="Resume"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <ContactMethod
          href="https://linkedin.com/in/amrictor" 
          Icon={LinkedIn}
          label="LinkedIn"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <ContactMethod
          href="https://github.com/amrictor" 
          Icon={GitHub}
          label="Github"
        />
      </Grid>
    </Grid>
  );
};

export default Contact;