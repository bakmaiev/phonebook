import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
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
