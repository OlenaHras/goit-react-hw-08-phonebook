import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      <Typography variant="h2" align="center">
        Phonebook
      </Typography>
      <Grid container spacing={{ xs: 10 }} justifyContent="center">
        <Grid item xs="auto">
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Loading contacts...</b>}
          {error && <b>{error}</b>}
          <ContactList />
        </Grid>
        <Grid item xs="auto">
          <h2>Creare a new contact</h2>
          <ContactForm />
        </Grid>
      </Grid>
    </>
    // <Container maxWidth="sm">
    // <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && !error && <b>Loading contacts...</b>}
    //   {error && <b>{error}</b>}
    //   <ContactList />
    // {/* </Container> */}
  );
};

export default Contacts;
