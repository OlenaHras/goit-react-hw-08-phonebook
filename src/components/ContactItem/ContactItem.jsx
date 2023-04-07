import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  IconButton,
  ListItemText,
} from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <ListItem id={contact.id} divider sx={{ pl: 0, m: 0 }}>
        <ListItemButton sx={{ pl: 0, m: 0 }}>
          <ListItemAvatar>
            <PermContactCalendarIcon color="primary" />
          </ListItemAvatar>
          <ListItemText>
            {contact.name}: {contact.number}
          </ListItemText>
          <IconButton onClick={handleDelete} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemButton>
      </ListItem>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  value: PropTypes.object,
};
