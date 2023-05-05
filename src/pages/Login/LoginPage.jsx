import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
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
  
    <Box  as='div'
    bg="#B794F4"
    w='50%'
    p={4}
    m='auto'
    mt='50px'
    color="white"
    fontWeight="semibold"
    letterSpacing="wide"
    fontSize="xxl"
    borderWidth="1px"
    borderRadius="lg" >
      
      <Heading size='xl' color='white' >Login Form</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl  >
        <FormLabel >
        Email
          <Input type="text" name="email" placeholder='Email...' value={email} onChange={handleChange}/>
        </FormLabel>
        <br />
        <FormLabel >
          Password
          <Input type="text" name="password" placeholder='Password...' value={password} onChange={handleChange} />
        </FormLabel>
        <br />
        <Button  type='submit'  colorScheme='purple' variant='outline'  mx="auto">Sign in</Button>
      </FormControl>
      </form>
    </Box>
   
  );
};
