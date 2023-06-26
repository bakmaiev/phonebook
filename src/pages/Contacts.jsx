import Filter from 'components/ContactsFilter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Title from 'components/Title/Title';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isAuthorizated = useSelector(selectIsAuthorized);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isAuthorizated ? (
        <div>
          <PhonebookForm title="Phonebook" />
          <Title title="Contacts"></Title>
          {isLoading && !error && <b>Request in progress...</b>}
          <Filter></Filter>
          <ContactsList title="Contacts" />
          {error && <b>{error}</b>}
        </div>
      ) : (
        <h1>Please log in to access the phonebook</h1>
      )}
    </>
  );
};

export default Contacts;
