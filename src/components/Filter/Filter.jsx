import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
// import TextField from '@mui/material/TextField';
import { TextField, Stack } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Stack
      sx={{
        width: '36ch',
      }}
    >
      <TextField
        type="text"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        label="Find contacts by name"
        id="outlined-disabled"
        size="small"
        margin="normal"
      />
    </Stack>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func,
};
