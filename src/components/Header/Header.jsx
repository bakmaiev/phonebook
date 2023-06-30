import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { Toolbar } from '@mui/material';

const Header = () => {
  const isAuthorizated = useSelector(selectIsAuthorized);

  return (
    <>
      <Toolbar
        component="header"
        sx={{
          height: '48px',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '4px',
          boxShadow: 2,
        }}
      >
        <Navigation />
        {isAuthorizated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </>
  );
};

export default Header;
