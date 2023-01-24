
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';

export function Filter() {
    
const dispatch = useDispatch();
    
const handleChangeFilter = (event) => {
    dispatch(setFilter(event.currentTarget.value))
    }
    
    return <label className={css.filterLabel}>Find contacts by Name
        <input
            type="text"
            name="filter"
            onChange={handleChangeFilter}
            className={css.filterName}
        ></input></label>
    
};

Filter.propTypes = {
    onFilter:PropTypes.func,
}