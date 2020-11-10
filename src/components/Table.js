import PropTypes from 'prop-types';
import React from 'react';
import OrderColumn from '../helpers/functions';
import {useSelector} from 'react-redux';

const Table = () =>  {
  const renderizaTableBody = (element) => {
    return (
      <tr key={element.name}>
        <td>{element.name}</td>
        <td>{element.rotation_period}</td>
        <td>{element.orbital_period}</td>
        <td>{element.diameter}</td>
        <td>{element.climate}</td>
        <td>{element.gravity}</td>
        <td>{element.terrain}</td>
        <td>{element.surface_water}</td>
        <td>{element.population}</td>
        <td>{element.films}</td>
        <td>{element.created}</td>
        <td>{element.edited}</td>
        <td>{element.url}</td>
      </tr>
    );
  }
   const values = useSelector((state) => state);
     const {filters } = values;
     const { filterByName, filterByNumericValues, order } = filters;
     const {data }= values;
    const planets = OrderColumn(data.results,
      filterByName.name,
      filterByNumericValues, order); 
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
        <table>
          <thead data-testid="column-sort">
            <tr>
              {console.log(values)}
              {headers.map((element) => <th key={element}>{element}</th>)}
            </tr>
          </thead>
          <tbody>
              {planets !== undefined
              ? planets.map((element) => (
                renderizaTableBody(element)))
              : null} 
          </tbody>
        </table>
      </div>
    );
  }
Table.propTypes = {
  value: PropTypes.instanceOf(Object),
};

Table.defaultProps = {
  value: {},
};

export default Table;
