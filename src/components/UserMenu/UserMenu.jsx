import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

import { getUser } from 'redux/auth/selectors';
import avatar from './png-avatar-cat.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <>
      <p>
        <img src={avatar} alt="avatar" width={24} />
        Welcome, {user.name}
      </p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        LogOut
      </button>
    </>
  );
};
