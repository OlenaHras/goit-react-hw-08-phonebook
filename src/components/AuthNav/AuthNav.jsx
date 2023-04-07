import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const style = ({ isActive }) => ({
  color: isActive ? '#0633b0' : '',
  background: isActive ? '#d5def6' : '#ffffff',
});

const AuthNav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <NavLink
        to="/register"
        style={style}
        // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <PersonAddIcon color="primary" />
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={style}
        // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <LoginIcon color="primary" />
        Login
      </NavLink>
    </Stack>
  );
};
export default AuthNav;
