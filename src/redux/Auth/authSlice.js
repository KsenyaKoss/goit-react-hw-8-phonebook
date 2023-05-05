import  { createSlice } from "@reduxjs/toolkit";
import { registrationThunk, loginThunk, logoutThunk, refreshThunk } from './authOperations'

const initialState = {
  user: { name: '', email: ''},
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,

};


const authSlice = createSlice ({ 
    name: 'auth',
    initialState,
    extraReducers: {
        [registrationThunk.fulfilled]: (state, {payload}) => {
            state.user = payload
            state.token = payload.token
            state.isLoggedIn = true
            state.isLoading = false
            state.error =null
        },
        [registrationThunk.pending]: (state) => {
            state.isLoading = true
        },
        [registrationThunk.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.isLoggedIn = false
            state.error = payload
        },

        [loginThunk.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
            state.isLoading = false
            state.error = null
        },

        [loginThunk.pending]: (state) => {
            state.isLoading = true
        },
        [loginThunk.rejected]: (state, {payload}) => {
            state.isLoggedIn = true
            state.isLoading = false
            state.error = payload
        },
        [logoutThunk.fulfilled]: (state)=> {
            state.user= ''
            state.token = ''
            state.isLoggedIn = false
        },
        [logoutThunk.pending]: (state)=> {
            state.user = ''
			state.token = ''
            state.isLoading = true
        },
        [logoutThunk.rejected]: (state, {payload})=> {
            state.error = payload
            state.isLoading = false
        },
        [refreshThunk.pending]: (state) => {
			state.isLoading = true
		},

		[refreshThunk.fulfilled]: (state, { payload }) => {
			state.isLoggedIn = true
			state.isLoading = false
			state.user = payload
		},
		[refreshThunk.rejected]: (state, { payload }) => {
			state.error = payload
			state.isLoading = false
		},
       
    }}
)

export const authReducer = authSlice.reducer