import randomIdGenerator from 'random-id-generator';
import { ADD_NEW_COMMENT } from '../typesConstants';

export default store => next => (action = {}) => {
  if (action.generateId) {
    return next({
        ...action,
        randomId: randomIdGenerator(25)
    });
  }

  next(action);
};