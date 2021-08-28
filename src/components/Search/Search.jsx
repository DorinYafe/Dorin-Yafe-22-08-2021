import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { autocompleteMock } from '../../mocks/autocomplete';
import { equals, find, pathOr, pipe, prop } from 'ramda';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import useStyles from './Search.style';
import { autoCompleteSearch } from '../../dataSource/dataSource';
import { useDispatch } from 'react-redux';
import { SET_CURRENT_LOCATION_KEY } from '../../redux/actions/weatherTypes';

const Search = () => {

  const { container} = useStyles();
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setLoading(true);
    setValue(target.value);
    autoCompleteSearch(prop('value', target))
      .then((values) => {
        setOptions(values);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
  };

  const handleSelection = () => {
    const { Key } = find(pipe(prop('LocalizedName'), equals(value)), options) || {};
    if (Key) {
      dispatch({ type: SET_CURRENT_LOCATION_KEY, payload: Key });
    }
  };

  return(
    <div className={container}>
      <IconButton onClick={handleSelection}>
        <SearchIcon />
      </IconButton>
      <Autocomplete
        onClose={({ target }) => setValue(target.innerText)}
        options={options}
        getOptionLabel={x => x.LocalizedName || ''}
        id="select-on-focus"
        selectOnFocus
        loading={loading}
        renderInput={(params) => (
          <TextField  
            value={value}
            onChange={handleChange} 
            {...params} 
            label="selectOnFocus"
            margin="normal"
          />
        )}
      
      />
    </div>
  );
};;

export default Search;