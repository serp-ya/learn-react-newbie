import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

CommentsListItems.propTypes = {
  id: PropTypes.string.isRequired
};

function CommentsListItems({comments}) {
  return comments.map(comment => (
    <li key = {comment.id}>
      <Comment comment = {comment} />
    </li>
  ));
}

export default CommentsListItems;