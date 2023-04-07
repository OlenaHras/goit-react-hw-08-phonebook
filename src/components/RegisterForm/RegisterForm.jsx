import { useDispatch } from 'react-redux';
import { TextField, Button, Stack } from '@mui/material';
import { registerUser } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <>
      <h2>CREATE YOUR ACCOUNT </h2>
      <Stack
        onSubmit={handleRegistration}
        component="form"
        sx={{
          width: '30ch',
        }}
        spacing={2}
      >
        <TextField
          type="text"
          name="name"
          placeholder="Alex Smith"
          required
          label="Name"
          id="outlined-disabled"
          size="small"
          margin="normal"
        />
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
          required
          label="Password"
          id="outlined-disabled"
          size="small"
          margin="normal"
        />
        <Button type="submit" variant="outlined">
          Sign up
        </Button>
      </Stack>
    </>
  );
};
