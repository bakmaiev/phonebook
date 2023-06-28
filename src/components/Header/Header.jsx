import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { StyledHeader } from './Header.styled';

const Header = () => {
  const isAuthorizated = useSelector(selectIsAuthorized);
  return (
    <StyledHeader>
      <Navigation />
      {isAuthorizated ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};

export default Header;
