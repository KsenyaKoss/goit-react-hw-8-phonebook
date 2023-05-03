import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registrationThunk } from 'redux/Auth/authOperations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('')
  const dispatch = useDispatch()

  const handleChange = ev => {
    const { name, value } = ev.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
        case 'password':
          setPassword(value);
          break;
      default:
        break;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault()
    const user = {name, email, password}
    console.log(user);
    dispatch(registrationThunk(user))

  }

  return (
    <>
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name='name' placeholder="Enter your name" value={name} onChange={handleChange}/>
        </label>{' '}
        <br />
        <label>
          Email
          <input type="text" name='email' placeholder="Enter your email" value={email} onChange={handleChange}/>
        </label>{' '}
        <br />
        <label >Password
        <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange}/>
        </label>
         <br />
        <button>Registration</button>
      </form>
    </>
  );
};
