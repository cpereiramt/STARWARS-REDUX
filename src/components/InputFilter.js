import React from 'react';
import { useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanet } from '../action/index';
import { Input } from 'reactstrap';

const InputFilter = () =>{
  const dispatch = useDispatch();

const filterByName = (event) => {
    dispatch(filterPlanet(event.target.value));
  } 
    return (
      <div>
        <Input
          id="filter_name"
          placeholder="Filtro por nome de Planeta"
          onChange={(e) => filterByName(e)}
          data-testid="name-filter"
          size="50"
        />
      </div>
    );
  }
InputFilter.propTypes = {
  filter: PropTypes.instanceOf(Function),
};

InputFilter.defaultProps = {
  filter: '',
};

export default InputFilter;
