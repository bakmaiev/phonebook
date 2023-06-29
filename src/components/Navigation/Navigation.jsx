import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';

const Navigation = () => {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const handleHomeBtn = e => {
    navigate('/');
  };
  return (
    <nav>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1, cursor: 'pointer' }}
        onClick={handleHomeBtn}
        to="/"
      >
        Phonebook
      </Typography>
      {isAuthorized && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
