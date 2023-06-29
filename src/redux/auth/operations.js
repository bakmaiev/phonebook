import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      setAuthHeader(data.token);
      Notify.success('You have successfully registered.');
      return data;
    } catch (e) {
      Notify.failure(`Registration error: ${e.message}`);
      return rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setAuthHeader(data.token);
      Notify.success('You have successfully logged in');
      return data;
    } catch (e) {
      Notify.failure(`Log in error: ${e.message}`);
      return rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      clearAuthHeader();
      Notify.warning('You have successfully logged out');
      return data;
    } catch (e) {
      Notify.failure(`Logout error: ${e.message}`);
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
