import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Layout = () => {
  return (
    <Box
      className="container"
      maxWidth="xs"
      sx={{
        width: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#fcfcfd',
        borderRadius: '4px',
        borderWidth: 0,
        boxShadow: 2,
        textAlign: 'center',
      }}
    >
      <Header />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Suspense fallback={<CircularProgress color="inherit" />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
