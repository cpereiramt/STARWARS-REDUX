import React from 'react';
import PropTypes from 'prop-types';
import { removeNumericFilter } from '../action/index';
import {useSelector, useDispatch} from 'react-redux';

const TagNumericFilters = () =>{
  const filters = useSelector((state) => state.filters.filterByNumericValues);
  const dispatch = useDispatch();
    return (
      <div>
        {filters.map((element) => (
          <div data-testid="filter" key={element.column}>
            {element.column}
            <button
              name={element.column}
              data-testid="filter"
              onClick={(event) => dispatch(removeNumericFilter(event.target.name))}
              type="button"
            >
                  x
            </button>
          </div>
        ))}
      </div>
    );
  }
TagNumericFilters.propTypes = {
  filters: PropTypes.string,
  removeFilter: PropTypes.instanceOf(Function),
};

TagNumericFilters.defaultProps = {
  filters: '',
  removeFilter: '',
};

export default TagNumericFilters;
