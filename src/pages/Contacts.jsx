import Filter from 'components/ContactsFilter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import CircularProgress from '@mui/material/CircularProgress';

const Contacts = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isAuthorized ? (
    <>
      <PhonebookForm title="Phonebook" />
      {isLoading && !error && <CircularProgress color="inherit" />}
      <Filter></Filter>
      <ContactsList title="Contacts" />
      {error && <b>{error}</b>}
    </>
  ) : (
    <h2>Sign in to access the phonebook!</h2>
  );
};

export default Contacts;
