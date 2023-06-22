import { Main } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Title from './Title/Title';
import Filter from './ContactsFilter/Filter';
import ContactsList from './ContactsList/ContactsList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <PhonebookForm title="Phonebook" />
      <Title title="Contacts"></Title>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter></Filter>
      <ContactsList title="Contacts" />
      {error && <b>{error}</b>}
    </Main>
  );
};
