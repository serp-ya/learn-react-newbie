import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

CommentsListItems.propTypes = {
  comments: PropTypes.array.isRequired
};

function CommentsListItems({comments}) {
  const commentsListItems = comments.map(comment => (
    <li key = {comment.id}>
      <Comment comment = {comment} />
    </li>
  ));

  return (
    <div>
      {commentsListItems}
    </div>
  )
}

export default CommentsListItems;