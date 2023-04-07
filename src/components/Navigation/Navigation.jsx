import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stack, ListItemText, Avatar } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import { getIsLoggedIn } from 'redux/auth/selectors';
import logo from './Phone book.png';
const style = ({ isActive }) => ({
  color: isActive ? '#0633b0' : '',
  background: isActive ? '#d5def6' : '#ffffff',
});

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <NavLink to="/">
        <Avatar src={logo} alt="logo" sx={{ width: 64, height: 64 }} />
        {/* <HomeIcon color="primary" sx={{ mr: 1, my: 0 }} /> */}
        <ListItemText>Home</ListItemText>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={style}>
          <ContactsIcon color="primary" sx={{ mr: 1 }} />
          <ListItemText>Contacts</ListItemText>
        </NavLink>
      )}
    </Stack>
  );
};
