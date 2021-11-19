import s from './FilterField.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions  from '../../redux/contacts/contacts-actions'; 
import { getFilter } from '../../redux/contacts/contacts-selectors';


const FilterField = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <label className={s.filterTitle}> Find contacts by name
      <input className={s.filterInput} type="text" value={filter} onChange={({target}) => dispatch(contactsActions.changeFilter(target.value))}/>
    </label>
  )
}

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default FilterField;