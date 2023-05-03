import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios('/contacts');
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'add/contact',
  async (contact, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', contact);
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'delete/contact',
  async (contactId, { rejectWithValue }) => {
    try {
      axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
