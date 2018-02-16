import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default function ArticleList({articles}) {
    const articleElements = articles.map(
      article => <li key = {article.id}><Article article = {article}/></li>
    );

    return (
        <ul>
            {articleElements}
        </ul>
    )
}