import { combineReducers } from 'redux';
import sortReducer from '../reducers/sortReducer';

const rootReducer = combineReducers({
  sort: sortReducer
});

export default rootReducer;