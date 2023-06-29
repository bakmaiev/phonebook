import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <Typography component="p" variant="p" color="inherit" align="center">
        Welcome, {user.toUpperCase()}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        to="/login"
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
