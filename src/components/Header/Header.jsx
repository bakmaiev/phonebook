import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';

const Header = () => {
  const isAuthorizated = useSelector(selectIsAuthorized);
  return (
    <header>
      <Navigation />
      {isAuthorizated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
