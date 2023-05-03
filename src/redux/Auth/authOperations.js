import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = (token) => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeToken = ()=> {
    axios.defaults.headers.common.Authorization = ''
}

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', user);
      setToken(res.data.token)
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk('auth/login', async (user, {rejectWithValue})=> {
  try {
    const res = await axios.post('/users/login', user);
    setToken(res.data.token)
    return res.data;
  } catch (error) {
     rejectWithValue(error.message);
  }
})

export const logoutThunk = createAsyncThunk('auth/logout', async(_, {rejectWithValue})=>{
 try {
    await axios.post('/users/logout')
    removeToken();
 } catch (error) {
    rejectWithValue(error.message)
 }
})