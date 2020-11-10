import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import FilterNumeric from './components/FilterNumeric';
import TagNumericFilters from './components/TagNumericFilters';
import OrderComponent from './components/OrderComponent';
import { fetchData } from './action/index';
import PropTypes from 'prop-types';


const App = () =>  {
  const value = useSelector((state) => state.data.results);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const fetchUrl = () => {
    dispatch(fetchData())
  }  
  useEffect(() => {
    fetchUrl(); 
    console.log('executou fecth' + JSON.stringify(value) + '=======>  /n' ); 
  }, [])

  return (
      <div>
        <InputFilter />
        <FilterNumeric />
        <TagNumericFilters />
        <OrderComponent />
         {isLoading
          ? <h1>Loading....</h1>
          : <Table />}
      </div>
    );
}

App.propTypes = {
  request: PropTypes.func,
  value: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  request: PropTypes.func,
  value: {},
}; 
export default App;
