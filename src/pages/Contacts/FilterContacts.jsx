import { Box, Heading, Input } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { setFilter } from "redux/Contacts/contactsSlice"


export const FilterContacts = () => {
    const dispatch = useDispatch()
    const handleChange = (ev) => {
     dispatch(setFilter(ev.target.value)) 
    }

    return (
        <Box as='div'   bg="#B794F4"
        w="100%"
        p={4}
        color="white"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xxl"
        borderWidth="1px"
        borderRadius="lg"
        >
        <Heading >Find contacts by Name</Heading>
        <Input type="text" onChange={handleChange} />
       </Box>
    )
}