import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/Auth/authOperations";
import { selectUser } from "redux/selectors";

export const UserMenu = () => {
    const {email} = useSelector(selectUser)
    const dispatch = useDispatch()
    return (
      <div>
        <p>Wellcome, {email}</p>
        <button onClick={()=>dispatch(logoutThunk())}>Logout</button>
      </div>
    );
  };
  