import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';

const RestrictedRoute = ({ element: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
