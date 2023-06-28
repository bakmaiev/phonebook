import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
// import Layout from 'components/Layout/Layout';
// import Home from 'pages/Home';
// import Contacts from 'pages/Contacts';
// import Login from 'pages/Login';
// import Register from 'pages/Register';

const Layout = lazy(() => import('../Layout/Layout'));
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
    <>
      {/* {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={<Contacts />} redirectTo="/login" />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute element={<Login />} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  element={<Register />}
                  redirectTo="/contacts"
                />
              }
            ></Route>
          </Route>
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      )} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute element={<Login />} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute element={<Register />} redirectTo="/contacts" />
            }
          ></Route>
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
};

export default App;
