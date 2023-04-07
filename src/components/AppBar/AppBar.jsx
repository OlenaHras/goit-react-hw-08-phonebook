import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import { Box } from '@mui/material';

import { getIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      <Box sx={{ display: { md: 'flex' } }}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Header>
  );
};

export default AppBar;
