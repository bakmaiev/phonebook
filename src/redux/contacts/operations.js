import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notify.success(`${contact.name} added to phonebook successfuly.`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notify.warning(data.message);
      return contactId;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// export const changeContact = createAsyncThunk(
//   'contacts/changeContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.patch(`/contacts/${contactId}`);
//       return data;
//     } catch (e) {
//       rejectWithValue(e.message);
//     }
//   }
// );
