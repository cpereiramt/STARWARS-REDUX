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
/*   constructor(props) {
    super(props);
    this.fetchUrl = this.fetchUrl.bind(this);
  } */
  const fetchUrl = () => {
    dispatch(fetchData())
  /*   const { request } = this.props;
    dispatch(request()); */
  }
  
  useEffect(() => {
    fetchUrl(); 
    console.log('executou fecth' + JSON.stringify(value) + '=======>  /n' ); 
  }, [])
  

/* 
    const { value } = this.props;
    const { isLoading } = value; */
/*     const { isLoading } = value;
 */    return (
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


/* const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});

const mapStateToProps = (state) => ({ value: state });
*/
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
