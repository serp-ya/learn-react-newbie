import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';

import middlewares from '../middlewares/';

const enhancer = applyMiddleware(...middlewares);
const store = createStore(reducer, {}, enhancer);

// dev only
// TODO: clean code before production
window.store = store;
export default store;