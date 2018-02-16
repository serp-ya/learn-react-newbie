import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen';

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

function Article({article, isOpen, toggleOpen}) {
  const {title, text, comments} = article;

  return (
    <div>
      <h3>{title}</h3>

      <button onClick = {toggleOpen}>
        {isOpen ? 'close' : 'open'}
      </button>

      {isOpen && (
        <section>
          {text}
          <CommentsList comments = {comments}/>
        </section>
      )}
    </div>
  )
}

export default toggleOpen(Article);