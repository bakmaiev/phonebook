import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // position: 'fixed',
        // bottom: '0',
        width: '100%',
        background: '#fcfcfd',
        borderRadius: '4px',
        borderWidth: 0,
        boxShadow: 2,
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
