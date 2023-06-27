import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/selectors';

const RestrictedRoute = ({ element: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  //   const navigate = useNavigate();
  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
