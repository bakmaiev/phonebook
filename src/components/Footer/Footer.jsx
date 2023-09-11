import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        ml: 'auto',
        mr: 'auto',
        background: '#fcfcfd',
        borderRadius: '4px',
        borderWidth: 0,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body1"
        color="text.primary"
        sx={{
          padding: 2,
        }}
      >
        {'Created by © '}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/bakmaiev/"
          target="_blank"
        >
          Bakmaiev Pavlo
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
