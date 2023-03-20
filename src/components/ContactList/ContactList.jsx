import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterInput, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

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
  const filtredContacts = handleFilterChange(contacts, filterValue.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {!isLoading &&
        filtredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
