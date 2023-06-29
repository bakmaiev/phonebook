import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AuthNav = () => {
  const navigate = useNavigate();
  const handleRegister = e => {
    navigate('/register');
  };
  const handleLogin = e => {
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
      }}
    >
      <Button variant="outlined" size="small" to="/login" onClick={handleLogin}>
        Sign in
      </Button>
      <Button
        variant="contained"
        size="small"
        to="/register"
        onClick={handleRegister}
      >
        Sign up
      </Button>
    </div>
  );
};

export default AuthNav;
