import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordeon from '../decorators/accordeon';

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

function ArticleList({articles, openArticleId, toggleOpen}) {
    const articleElements = articles.map(article =>
        <li key = {article.id}>
            <Article
                article = {article}
                toggleOpen = {toggleOpen(article.id)}
                isOpen = {article.id === openArticleId}
            />
        </li>
    );

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default accordeon(ArticleList);