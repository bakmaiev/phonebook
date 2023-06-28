import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import Layout from 'components/Layout/Layout';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const Contacts = lazy(() => import('../../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={<RestrictedRoute element={<Register />} redirectTo="/" />}
          ></Route>
          <Route
            path="/login"
            element={<RestrictedRoute element={<Login />} redirectTo="/" />}
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          ></Route>
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    )
  );
};

export default App;
