import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from '../pages/Register/RegisterPage';
import { LoginForm } from '../pages/Login/LoginPage';
import { Contacts } from '../pages/Contacts/ContactsPage';
import { Homepage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};
