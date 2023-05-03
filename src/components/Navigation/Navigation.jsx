import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </div>

      <div>
        <NavLink to="register">Register Form</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
      <div>
        <UserMenu />
      </div>
    </nav>
  );
};
