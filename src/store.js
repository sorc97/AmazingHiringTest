import { createStore } from 'redux'; 
import rootReducer from './reducers/rootReducer';
import profilesListReducer from './reducers/profilesListReducer';
import sortReducer from './reducers/sortReducer';

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

export default store;