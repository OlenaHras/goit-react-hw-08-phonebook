import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <Link to="/">🏠 Home</Link>
      {isLoggedIn && <Link to="/contacts">📞Contacts</Link>}
    </nav>
  );
};
