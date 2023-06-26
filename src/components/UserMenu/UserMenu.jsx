import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
