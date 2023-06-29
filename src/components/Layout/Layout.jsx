import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <div
      style={{
        width: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 14,
      }}
    >
      <Header />
      <Main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
