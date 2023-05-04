import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/Contacts/contactsOperations';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { AddContactForm } from './AddForm';
import { FilterContacts } from './FilterContacts';
import { Box, Button, Divider, Flex, Heading, IconButton, Spinner } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Flex gap="2" h="250px" alignItems="flex-start" mt="4">
        <FilterContacts />
        <AddContactForm />
      </Flex>
      <Divider />
      <Box
        as="div"
        bg="purple.200"
        w="66%"
        p={4}
        color="white"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xxl"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Heading textAlign="center" mb="20px">
          Contacts
        </Heading>
        {isLoading && (
          <Spinner
            color="purple.500"
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
          />
        )}
        {filteredContacts.length ? (
          <ul>
            {filteredContacts.map(({ name, number, id }, index) => {
              return (
                <Flex
                  key={id}
                  alignItems='baseline'
                  justifyContent="space-between"
                  mb="10px"
                >
                  <p>
                    {index + 1}.{name} <PhoneIcon w={5} h={5} ml='30px'/> {number}
                  </p>
                  <Button
                    type="button"
                    colorScheme="purple.500"
                    variant="outline"
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </Button>
                </Flex>
              );
            })}
          </ul>
        ) : (
          <Heading textAlign="center" size="20px">
            Your contact list is empty
          </Heading>
        )}
      </Box>
    </>
  );
};
