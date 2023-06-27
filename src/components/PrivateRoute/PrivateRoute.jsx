import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectIsAuthorized, selectIsRefreshing } from 'redux/auth/selectors';

const PrivateRoute = ({ element: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isAuthorized && !isRefreshing;
  // const navigate = useNavigate();
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
