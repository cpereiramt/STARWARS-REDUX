import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanet } from '../action/index';

const InputFilter = () =>{
  const dispatch = useDispatch();
 /*  constructor(props) {
    super(props);
    this.filterByName = this.filterByName.bind(this);
  } */

  const filterByName = (event) => {
    dispatch(filterPlanet(event.target.value));
  } 
    return (
      <div>
        <input
          id="filter_name"
          placeholder="Filtro por nome de Planeta"
          onChange={(e) => filterByName(e)}
          data-testid="name-filter"
          size="50"
        />
      </div>
    );
  }

/* const mapDispatchToProps = (dispatch) => ({
  filter: (e) => dispatch(filterPlanet(e)),
});
 */
InputFilter.propTypes = {
  filter: PropTypes.instanceOf(Function),
};

InputFilter.defaultProps = {
  filter: '',
};

export default InputFilter;
