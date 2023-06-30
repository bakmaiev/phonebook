import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      component="main"
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
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};

export default Layout;
