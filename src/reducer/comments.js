import {normalizedComments as defaultComments} from '../fixtures';
import { ADD_NEW_COMMENT } from '../typesConstants';
import { arrToMap } from '../helpers';

const commentsMap = arrToMap(defaultComments);

export default (commentsState = commentsMap, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_NEW_COMMENT:
      const { user, text } = payload;
      const newComment = commentsFactory(randomId, user, text);
      commentsState[randomId] = newComment;
      return commentsState;
  }

  return commentsState;
}

function commentsFactory(id, user, text) {
  return {
    id,
    user,
    text
  }
}