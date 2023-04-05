import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from 'redux/auth/operations';
// import { getIsLoggedIn } from 'redux/auth/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const isLogged = useSelector(getIsLoggedIn);

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // try {
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // console.log(form.elements.name.value);

    toast.success('Registration is success');
    form.reset();
    // } catch (error) {
    //   toast.error('Registration is not success');
    // }
    // if (isLogged) {
    // }
  };
  return (
    <>
      <h2>LOGIN TO YOUR ACCOUNT </h2>
      <form onSubmit={handleRegistration}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Alex Smith" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="example@mail.com" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="" />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};
