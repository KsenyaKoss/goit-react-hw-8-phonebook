import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/Auth/authOperations";
import { selectUser } from "redux/selectors";
import { Button, Flex } from "@chakra-ui/react";

export const UserMenu = () => {
    const {email} = useSelector(selectUser)
    const dispatch = useDispatch()
    return (
      <Flex gap={3} alignItems='center'>
        <p>Wellcome, {email}</p>
        <Button colorScheme='purple' size='lg'    onClick={()=>dispatch(logoutThunk())}>Logout</Button>
      </Flex>
    );
  };
  