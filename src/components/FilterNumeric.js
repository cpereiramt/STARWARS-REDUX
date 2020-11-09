import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumeric } from '../action/index';

const FilterNumeric = () =>  {
  const numericValues  = useSelector((state) => state.filters.filterByNumericValues);
  const dispatch = useDispatch();

  const translateStateToArray = (state) =>{
    const finalArray = [];
    state.map((option) => finalArray.push(option.column));
    return finalArray;
  }
/* 
  constructor(props) {
    super(props);
    this.filterNumbers = this.filterNumbers.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  } */

  const filterNumbers = () =>{
/*     const { filterNumber } = this.props;
 */    const column = document.getElementById('filter');
    const comparation = document.getElementById('comparation');
    const value = document.getElementById('input-value');
    if (column.selectedIndex > 0 && comparation.selectedIndex > 0 && value.value !== '') {
      const SelectionColumn = column.options[column.selectedIndex].value;

      const selectioncomparation = comparation.options[comparation.selectedIndex].value;

      const selectionValue = value.value;

      dispatch(filterNumeric(SelectionColumn, selectioncomparation, selectionValue));
    } else {
      alert('Preencha Todos os campos para filtrar !');
    }
  }
 
  const filterOptions = () => {
/*      const { numericValues } = this.props;
 */     const optionList = ['Selecione uma Opção', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const arrayColumState = translateStateToArray(numericValues);
    const filteredOptions = optionList.filter((option) => !arrayColumState.includes(option));
    return filteredOptions;
  }

 
     const optionListToRender = filterOptions();
     return (
      <div>
        <select data-testid="column-filter" id="filter">
           {optionListToRender.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))} 
        </select>
        <select data-testid="comparison-filter" id="comparation">
          <option value=" ">Selecione Uma Opção </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input type="number" placeholder="numeros" id="input-value" data-testid="value-filter" />
        <button
          type="button"
          onClick={(e) => filterNumbers(e)}
          data-testid="button-filter"
        >
        Filtrar
        </button>
      </div>
    );
  }

/* const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterNumber: (e, v, h) => dispatch(filterNumeric(e, v, h)),
}); */

FilterNumeric.propTypes = {
  filterNumber: PropTypes.instanceOf(Function),
  numericValues: PropTypes.instanceOf(Array),
};

FilterNumeric.defaultProps = {
  filterNumber: '',
  numericValues: [],
};
export default FilterNumeric;
