import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
// import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {/* <Link to="/">🏠 Home</Link> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      {/* <Link to="/register">🌐Register</Link>
      <Link to="/login">✔Login</Link> */}
      {/* <Link to="/contacts">📞Contacts</Link> */}
    </Header>
  );
};

export default AppBar;
