import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/authOperations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ev => {
    const { name, value } = ev.target;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault()
    const user = { email, password}
   dispatch(loginThunk(user))
   setEmail('')
   setPassword('')
  }


  return (
    <>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">
        Email
          <input type="text" name="email" placeholder='Email...' value={email} onChange={handleChange}/>
        </label>
        <br />
        <label htmlFor="">
          Password
          <input type="text" name="password" placeholder='Password...' value={password} onChange={handleChange} />
        </label>
        <br />
        <button>Sign in</button>
      </form>
    </>
  );
};
