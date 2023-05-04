import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/Auth/authOperations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    ev.preventDefault();
    const user = { name, email, password };
    console.log(user);
    dispatch(registrationThunk(user));
    setName('')
    setEmail('')
    setPassword('')
  };

  return (
    <Box
      bg="#B794F4"
      w="50%"
      p={4}
      m="auto"
      mt="50px"
      color="white"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xxl"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Heading>Register Form</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            Name
            <Input
            id='2'
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
          </FormLabel>{' '}
          <br />
          <FormLabel>
            Email
            <Input
            id='1'
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </FormLabel>{' '}
          <br />
          <FormLabel>
            Password
            <Input
          
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <Button  type='submit'  colorScheme="purple.500" variant="outline" mx="auto">
            Registration
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
