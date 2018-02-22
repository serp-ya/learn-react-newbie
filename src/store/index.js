import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

// dev only
// TODO: clean code before production
window.store = store;
export default store;