import {normalizedComments as defaultComments} from '../fixtures';
import { ADD_NEW_COMMENT } from '../typesConstants';
import { arrToMap } from '../helpers';

const commentsMap = arrToMap(defaultComments);

export default (commentsState = commentsMap, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_NEW_COMMENT:
      const { newCommentId, user, text } = payload;
      const newComment = commentsFactory(newCommentId, user, text);
      commentsState[newCommentId] = newComment;
      return commentsState;
      console.log('payload', payload);
      console.log('newComment', newComment);
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