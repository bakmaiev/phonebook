import React from 'react';
import { Link, Typography } from '@mui/material';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="text.primary">
        {'Created by © '}
        <Link color="inherit" href="https://www.linkedin.com/in/bakmaiev/">
          Bakmaiev Pavlo
        </Link>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
