import randomIdGenerator from 'random-id-generator';
import { ADD_NEW_COMMENT } from '../typesConstants';

export default store => next => (action = {}) => {
  if (action.type === ADD_NEW_COMMENT) {
    action.payload.newCommentId = randomIdGenerator(25);
  }

  next(action);
};