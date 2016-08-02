import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import list from '../reducers/listReducer';
import nav from '../reducers/navReducer';

const rootReducer = combineReducers({
  list,
  nav,
  routing
});

export default rootReducer;
