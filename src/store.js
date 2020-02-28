import { createStore } from 'redux'; 
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => {
  const currentSort = JSON.stringify(store.getState().sort);
  localStorage['profiles-sort'] = currentSort;
});

export default store;