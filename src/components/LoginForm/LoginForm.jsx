import { useDispatch } from 'react-redux';
import { TextField, Button, Stack } from '@mui/material';
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
      <h2>LOG IN TO YOUR ACCOUNT </h2>
      <Stack
        onSubmit={handleLogIn}
        component="form"
        sx={{
          width: '30ch',
        }}
        spacing={2}
      >
        <TextField
          type="text"
          name="email"
          placeholder="example@mail.com"
          required
          label="Email"
          id="outlined-disabled"
          size="small"
          margin="normal"
        />
        <TextField
          type="text"
          name="password"
          placeholder=""
          label="Password"
          id="outlined-disabled"
          size="small"
          margin="normal"
        />
        <Button type="submit" variant="outlined">
          Log in
        </Button>
      </Stack>
    </>
  );
};
