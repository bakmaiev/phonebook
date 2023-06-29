import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';

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
      {isAuthorized && (
        <Button size="small" to="/contacts" onClick={handleContactsBtn}>
          Contacts
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
