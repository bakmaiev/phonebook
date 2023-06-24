import Filter from 'components/ContactsFilter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Title from 'components/Title/Title';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhonebookForm title="Phonebook" />
      <Title title="Contacts"></Title>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter></Filter>
      <ContactsList title="Contacts" />
      {error && <b>{error}</b>}
    </div>
  );
};

export default Contacts;
