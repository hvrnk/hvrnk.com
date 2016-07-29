import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import list from '../reducers/listReducer';

const rootReducer = combineReducers({
  list,
  routing
});

export default rootReducer;
