import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { contactsReducer } from "./Contacts/contactsSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsReducer,
		
	},

	devTools: process.env.NODE_ENV !== 'production',
})

