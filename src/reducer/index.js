import {combineReducers} from 'redux';
import count from './counter';
import articles from './articles';
import filtersState from './filters';

export default combineReducers({
  count,
  articles,
  filtersState
});