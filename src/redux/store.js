import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		// contacts: todoReducer,
		// filter: filterReducer,
		// theme: themeReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})

