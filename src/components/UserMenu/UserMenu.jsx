import { useSelector, useDispatch } from 'react-redux';
import { Button, Avatar, ListItemText, Stack } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOutUser } from 'redux/auth/operations';

import { getUser } from 'redux/auth/selectors';
import avatar from './png-avatar-cat.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar src={avatar} alt="avatar" />
      <ListItemText>Welcome, {user.name}</ListItemText>
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOutUser())}
      >
        Log Out
        <LogoutIcon color="primary" />
      </Button>
    </Stack>
  );
};
