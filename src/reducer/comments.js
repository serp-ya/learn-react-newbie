import {normalizedComments as defaultComments} from '../fixtures';

const commentsMap = defaultComments.reduce((result, comment) => {
  result[comment.id] = comment;
  return result;
}, {});

export default (commentsState = commentsMap, action) => {
  const {type, payload} = action;

  switch (type) {
  }

  return commentsState;
}