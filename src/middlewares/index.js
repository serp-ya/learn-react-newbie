import thunk from 'redux-thunk';
import api from './api';
import idGenerator from './idGenerator';
import logger from './logger';

export default [
  thunk,
  api,
  idGenerator,
  logger
];