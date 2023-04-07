import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import { TextField, Button, Box, Stack, Container } from '@mui/material';
// import { Form, SubmitButton, FormInput } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const uniqueEl = contacts.find(el => el.name === form.name.value);
    if (!uniqueEl) {
      dispatch(addContact({ name, number }));
    }
    if (uniqueEl) {
      alert(`${form.name.value} is already in contacts`);
    }
    setName('');
    setNumber('');
    form.reset();
  };

  return (
    <Stack
      onSubmit={handleSubmit}
      component="form"
      xs={{ border: '1px', m: 1 }}
      sx={{
        width: '36ch',
      }}
      spacing={2}
    >
      <TextField
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        label="Name"
        id="outlined-disabled"
        autoComplete="off"
        size="small"
        margin="normal"
      />

      <TextField
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        label="Number"
        id="outlined-disabled"
        size="small"
        margin="normal"
      />

      <Button type="submit" variant="outlined">
        Add contact
      </Button>
    </Stack>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
