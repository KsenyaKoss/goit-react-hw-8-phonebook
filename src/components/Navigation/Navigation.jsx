import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { Box, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      as="header"
      bg="#B794F4"
      w="100%"
      p={4}
      color="white"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xxl"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Flex align="center" justifyContent="space-between" w="100%">
        <Flex gap={3}>
          <NavLink to="/">Home</NavLink>|
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </Flex>
     {isLoggedIn ? (
          <div>
            <UserMenu />
          </div>
        ) : (
          <Flex gap={3}>
            <NavLink to="register">Register Form</NavLink>|
            <NavLink to="login">Login</NavLink>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
