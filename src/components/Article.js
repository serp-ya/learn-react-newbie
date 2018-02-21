import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import { CSSTransitionGroup } from 'react-transition-group';

import './article.animation.css';

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
};

export default function Article({article, isOpen, toggleOpen}) {
  const {title, text, comments} = article;

  return (
    <div>
      <h3>{title}</h3>

      <button onClick = {toggleOpen}>
        {isOpen ? 'close' : 'open'}
      </button>

      <CSSTransitionGroup
        transitionName = 'article'
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {300}
      >
        {isOpen && (
          <section>
            {text}
            <CommentsList comments = {comments}/>
          </section>
        )}
      </CSSTransitionGroup>
    </div>
  )
}