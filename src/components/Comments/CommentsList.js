import React from 'react';
import PropTypes from 'prop-types';
import CommentsListItems from './CommentsListItems';
import AddCommentForm from './AddComentForm';
import toggleOpen from '../../decorators/toggleOpen';

import {connect} from 'react-redux';

CommentsList.defaultProps = {
  comments: []
};

CommentsList.propTypes = {
  comments: PropTypes.array
};

function CommentsList({articleId, comments, isOpen, toggleOpen}) {
  return (
    <div>

      {!comments.length && (
        <div>
          <p>Have no any comments</p>
          <AddCommentForm articleId = {articleId} />
        </div>
      )}

      {!!comments.length && (
        <div>
          <button onClick={toggleOpen}>
            {isOpen ? 'Close comments' : 'Show comments'}
          </button>
          {isOpen && (
            <ul>
              <CommentsListItems commentsId = {comments}/>
              <AddCommentForm articleId = {articleId} />
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default toggleOpen(CommentsList)