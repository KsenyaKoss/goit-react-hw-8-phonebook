import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { contactsReducer } from "./Contacts/contactsSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
	key: 'token',
	version: 1,
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		auth: persistReducer(persistConfig, authReducer),
		contacts: contactsReducer,
		
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),

	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

