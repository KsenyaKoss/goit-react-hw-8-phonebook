import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </div>

      <div>
        <NavLink to="register">Register Form</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
     {  isLoggedIn &&  <div>
        <UserMenu />
      </div>
      }
    </header>
  );
};
