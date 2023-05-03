const { createSlice } = require("@reduxjs/toolkit");
const { fetchContacts, addContact, deleteContact } = require("./contactsOperations");

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
       [fetchContacts.fulfilled]: (state, {payload}) => {
        state.contacts = payload
        state.isLoading = false
        state.error = null
       },
       [addContact.fulfilled]: (state, {payload}) => {
        state.contacts.push(payload)
        state.isLoading = false
        state.error = null
       },
       [deleteContact.fulfilled]: (state, {payload}) => {
        const index = state.contacts.findIndex(contact => contact.id === payload.id)
        state.contacts.splice(index, 1)
        state.error = payload.error
        state.isLoading = false
       }
    }
})

export const contactsReducer = contactsSlice.reducer

