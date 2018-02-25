import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordeon from '../../decorators/accordeon';
import { connect } from 'react-redux';
import selectors from '../../selectors';

ArticleList.propTypes = {
  // from connect
  articles: PropTypes.object.isRequired,

  // from accordeon
  openItemId: PropTypes.string,
  toggleOpen: PropTypes.func
};

function ArticleList({articles, openItemId, toggleOpen}) {
  const articleElements = Object.keys(articles).map(articleId =>
    <li key={articleId}>
      <Article
        article={articles[articleId]}
        toggleOpen={toggleOpen(articleId)}
        isOpen={articleId === openItemId}
      />
    </li>
  );

  return (
    <ul>
      {articleElements}
    </ul>
  )
}

export default connect(state => (
  { articles: selectors.filterArticles(state) }
))(accordeon(ArticleList));