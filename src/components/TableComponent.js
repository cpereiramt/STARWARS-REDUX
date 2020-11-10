import PropTypes from 'prop-types';
import React from 'react';
import OrderColumn from '../helpers/functions';
import {useSelector} from 'react-redux';
import { Table,Container } from 'reactstrap';
import styled from 'styled-components';


const TD = styled.td`
font-size:14px;
width:80%;
text-align: center;
vertical-align: middle;
`;

const THEAD = styled.thead`
  position:sticky;
    top:10;
    z-index:1;
    border-top:0;
    background: #ededed;
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
      <Container fluid={true}>       
         <Table size="lg" hover>
          <THEAD data-testid="column-sort">
            <tr>
              {console.log(values)}
              {headers.map((element) => <th key={element} scope="row">{element}</th>)}
            </tr>
          </THEAD>
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
        </Container>
 
    );
  }
TableComponent.propTypes = {
  value: PropTypes.instanceOf(Object),
};

TableComponent.defaultProps = {
  value: {},
};

export default TableComponent;
