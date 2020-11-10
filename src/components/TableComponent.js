import PropTypes from 'prop-types';
import React from 'react';
import OrderColumn from '../helpers/functions';
import {useSelector} from 'react-redux';
import { Table,Container } from 'reactstrap';
import styled from 'styled-components';


const TD = styled.td`
font-size:12px;
`;



const TableComponent = () =>  {
  const renderizaTableBody = (element) => {
    return (
        <>
        <TD>{element.name}</TD>
        <TD>{element.rotation_period}</TD>
        <TD>{element.orbital_period}</TD>
        <TD>{element.diameter}</TD>
        <TD>{element.climate}</TD>
        <TD>{element.gravity}</TD>
        <TD>{element.terrain}</TD>
        <TD>{element.surface_water}</TD>
        <TD>{element.population}</TD>
        <TD>{element.created}</TD>
        <TD>{element.edited}</TD>
        <TD>{element.url}</TD>
      </>
    );
  }
   const values = useSelector((state) => state);
     const {filters } = values;
     const { filterByName, filterByNumericValues, order } = filters;
     const {data }= values;
    const planets = OrderColumn(data.results,
      filterByName.name,
      filterByNumericValues, order); 
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'created', 'edited', 'url'];
    return (
        <Table size="lg" hover striped>
          <thead data-testid="column-sort">
            <tr>
              {console.log(values)}
              {headers.map((element) => <th key={element} scope="row">{element}</th>)}
            </tr>
          </thead>
          <tbody>
              {planets !== undefined
              ? planets.map((element) => (
                <tr>
                {renderizaTableBody(element)}
                </tr>
                ))
              : null} 
          </tbody>          
        </Table>
    );
  }
TableComponent.propTypes = {
  value: PropTypes.instanceOf(Object),
};

TableComponent.defaultProps = {
  value: {},
};

export default TableComponent;
