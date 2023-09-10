import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';
import { StyledNav } from './Navigation.styled';

const Navigation = () => {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const handleHomeBtn = e => {
    navigate('/');
  };
  const handleContactsBtn = e => {
    navigate('/contacts');
  };
  return (
    <StyledNav>
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
      {isAuthorized && (
        <Button size="medium" to="/contacts" onClick={handleContactsBtn}>
          Contacts
        </Button>
      )}
    </StyledNav>
  );
};

export default Navigation;
