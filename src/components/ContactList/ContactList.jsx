import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterInput, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { List } from '@mui/material';

const handleFilterChange = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterInput);
  const filteredContacts = handleFilterChange(contacts, filterValue.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContactsNotEmpty =
    filteredContacts.length > 0 ? (
      filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })
    ) : (
      <p>Here are no contacts </p>
    );

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {!isLoading && isContactsNotEmpty}
    </List>
  );
};

export default ContactList;
