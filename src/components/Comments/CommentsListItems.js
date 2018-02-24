import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

CommentsListItems.propTypes = {
  commentsId: PropTypes.array.isRequired
};

function CommentsListItems({commentsId}) {
  const commentsListItems = commentsId.map(id => (
    <li key = {id}>
      <Comment id = {id} />
    </li>
  ));

  return (
    <div>
      {commentsListItems}
    </div>
  )
}

export default CommentsListItems;