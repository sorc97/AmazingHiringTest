import { combineReducers } from 'redux';
import profilesListReducer from './profilesListReducer';
import sortReducer from '../reducers/sortReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  profilesList: profilesListReducer
});

export default rootReducer;