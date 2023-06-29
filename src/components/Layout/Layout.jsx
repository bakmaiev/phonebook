import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        width: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    </div>
  );
};

export default Layout;
