import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordeon from '../../decorators/accordeon';
import { connect } from 'react-redux';

import { checkSelectedFilter } from '../Filters/MultiSelect';
import { checkDateFilter } from '../Filters/Calendar';

ArticleList.propTypes = {
  // from connect
  articles: PropTypes.array.isRequired,

  // from accordeon
  openItemId: PropTypes.string,
  toggleOpen: PropTypes.func
};

function ArticleList({articles, openItemId, toggleOpen, filtersState}) {
  const {selectArticles, dateArticles} = filtersState;
  const filteredArticles = articles.filter(article => {
    return checkSelectedFilter(selectArticles, article) && checkDateFilter(dateArticles, article);
  });

  const articleElements = filteredArticles.map(article =>
    <li key={article.id}>
      <Article
        article={article}
        toggleOpen={toggleOpen(article.id)}
        isOpen={article.id === openItemId}
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
    {
      articles: state.articles,
      filtersState: state.filtersState
    }
))(accordeon(ArticleList));