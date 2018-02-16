import React from 'react';
import PropTypes from 'prop-types';
import CommentsListItems from './CommentsListItems';
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

  return (
    <div>
      <button onClick = {toggleOpen}>
        {isOpen ? 'Close comments' : 'Show comments'}
      </button>

      {isOpen && (
        <ul>
          <CommentsListItems comments = {comments}/>
        </ul>
      )}
    </div>
  )
}

export default toggleOpen(CommentsList);