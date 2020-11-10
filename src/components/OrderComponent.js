import React, {useState} from 'react';
import Proptypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { columnOrder } from '../action/index';
import { Button } from 'reactstrap';

const OrderComponent = () => {
  const values = useSelector((state) => state.data.results);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const changeRadioValue = (event) => {
    console.log('clicou no 1', event.target.value);
    setState({ sort: event.target.value });
  }

 const changeSelectValue = (event) => {
    console.log('clicou no 1', event.target.value);
    setState({ column: event.target.value });
  }

  const changeOrder = () => {
    const { column, sort } = state;

    dispatch(columnOrder(column, sort));
  }
  const renderRadioButton = () => {
    return (
      <div onChange={changeRadioValue}>
        <input
          type="radio"
          id="ASC"
          name="order"
          value="ASC"
          data-testid="column-sort-input"
        />
        <label htmlFor="ASC">ASC</label>
        <input
          type="radio"
          id="DESC"
          name="order"
          value="DESC"
          data-testid="column-sort-input"
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  const renderComponent = (options) => {
    return (
      <fieldset>
        <label htmlFor="seletion">
          Column Select
        </label>
        <select
          onChange={(event) => changeSelectValue(event)}
          name="seletion"
          data-testid="column-sort"
        >
          {options.map((element) => (<option>{element}</option>))}
        </select>

        {renderRadioButton()}
        <Button
          color="primary"
          data-testid="column-sort-button"
          onClick={() => changeOrder()}
        >
               set order
         </Button>

      </fieldset>
    );
  } 
    const options = ['Name', 'rotation_period', 'orbital_period', 'diameter', 'climate'];
    return (
      <div>
        {console.log(values)}
        {renderComponent(options)}
      </div>
    );
  }

OrderComponent.propTypes = {
  orderer: Proptypes.instanceOf(Function),
};

OrderComponent.defaultProps = {
  orderer: '',
};
export default OrderComponent;
