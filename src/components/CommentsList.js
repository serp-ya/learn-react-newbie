import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

CommentsList.defaultProps = {
  comments: []
};

CommentsList.propTypes = {
  comments: PropTypes.array
};

function CommentsList({comments, isOpen, toggleOpen}) {
  if (!comments.length) {
    return <p>Have no any comments</p>;
  }

  const commentsListItems = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));

  return (
    <div>

      <button onClick = {toggleOpen}>
        {isOpen ? 'Close comments' : 'Show comments'}
      </button>

      {isOpen && (<ul>{commentsListItems}</ul>)}

    </div>
  )
}

export default toggleOpen(CommentsList);