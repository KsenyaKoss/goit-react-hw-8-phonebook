import  { createSlice } from "@reduxjs/toolkit";
import { registrationThunk, loginThunk, logoutThunk } from './authOperations'

const initialState = {
  user: { name: '', email: ''},
  token: null,
  isLoggedIn: false,
  isLoading: false,

};


const authSlice = createSlice ({ 
    name: 'auth',
    initialState,
    extraReducers: {
        [registrationThunk.fulfilled]: (state, {payload}) => {
            console.log(payload);
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        },
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        },
        [logoutThunk.fulfilled]: (state)=> {
            state.user= ''
            state.isLoggedIn = false
        }
       
    }

}
)

export const authReducer = authSlice.reducer