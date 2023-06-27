import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuthorized && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
