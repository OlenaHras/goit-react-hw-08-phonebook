import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </>
  );
};

export default Contacts;
