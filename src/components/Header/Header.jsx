import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuthorizated = useSelector(selectIsAuthorized);
  const handleHomeBtn = e => {
    navigate('/');
  };
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
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
    </>
  );
};

export default Header;
