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
        sx={{
          width: '100%',
          height: '48px',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fcfcfd',
          borderRadius: '4px',
          borderWidth: 0,
          boxShadow: 2,
          paddingLeft: '15px',
          paddingRight: '15px',
          textAlign: 'center',
        }}
      >
        <Navigation />
        {isAuthorizated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </>
  );
};

export default Header;
