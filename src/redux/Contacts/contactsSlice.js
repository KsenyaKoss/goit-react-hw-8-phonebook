import { logoutThunk } from 'redux/Auth/authOperations';

const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchContacts,
  addContact,
  deleteContact,
} = require('./contactsOperations');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducer: {
    setFilter(state, { payload }) {
      state.filter = payload;
      console.log(state.filter);
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      const index = state.contacts.items.findIndex(
        contact => contact.id === payload
      );
      state.contacts.items.splice(index, 1);
      state.contacts.error = payload.error;
      state.contacts.isLoading = false;
    },
    [logoutThunk.fulfilled]: state => {
      state.items = [];
    },
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
