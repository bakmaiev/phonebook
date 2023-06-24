import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Navigation></Navigation>
      <AuthNav></AuthNav>
    </header>
  );
};

export default Header;
