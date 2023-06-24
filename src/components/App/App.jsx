import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
};

export default App;
