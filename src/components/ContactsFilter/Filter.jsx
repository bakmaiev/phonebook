import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.target.value));

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <FilterLabel>
        <span>Search contacts: </span>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    </div>
  );
};

export default Filter;
