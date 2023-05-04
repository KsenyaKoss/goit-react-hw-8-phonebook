import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from '../pages/Register/RegisterPage';
import { LoginForm } from '../pages/Login/LoginPage';
import { Contacts } from '../pages/Contacts/ContactsPage';
import { Homepage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react'
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/authOperations';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
  return (
    <ChakraProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/contacts" element={
        <PrivateRoute>
          <Contacts />
        </PrivateRoute>} />
        <Route path="/register" element={
        <PublicRoute>
          <RegisterForm />
        </PublicRoute>} />
        <Route path="/login" element={
        <PublicRoute>
          <LoginForm />
        </PublicRoute>} />
      </Route>
    </Routes>
    </ChakraProvider>
  );
};
