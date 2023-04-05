import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <h2>LOGIN TO YOUR ACCOUNT </h2>
      <form onSubmit={handleLogIn}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="example@mail.com" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
