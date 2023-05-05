import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "redux/Contacts/contactsOperations"
import { selectContacts } from "redux/selectors"
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
  } from '@chakra-ui/react'

export const AddContactForm = () => {


    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()
    const {items} = useSelector(selectContacts)
 


    const handleSubmit = (ev) => {
        ev.preventDefault()
    const existingContact = items.find(item => item.name === name || item.number === number)
       if(!existingContact) { dispatch(addContact({ name, number}))
       setName('')
       setNumber('')
          } else {
            alert(`${name} or ${number} is already in contacts`)
            setName('')
            setNumber('')
        }
    }

    const handleInputChange = (ev)=> {
        if(ev.target.name === 'name'){setName(ev.target.value)}
        if(ev.target.name === 'number'){setNumber(ev.target.value)}
    }

    return (
        <Box as="div"   bg="#B794F4"
        w='50%'px={2} pb={2}
        color="white"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xxl"
        borderWidth="1px"
        borderRadius="lg"
       >
        <title>Add Contact Form</title>
        <form onSubmit={handleSubmit}>
        <FormControl >
          <FormLabel>
            Name
            <Input type="text" name="name" value={name} onChange={handleInputChange}/>
          </FormLabel>
          <FormLabel>
            number
            <Input type="text" name="number" value={number} onChange={handleInputChange}/>
          </FormLabel>
          <Button type="submit" colorScheme='purple' variant='outline'  mx="auto" isDisabled={!name || !number}>Add Contact</Button>
        </FormControl>
        </form>
      </Box> 
    )
}