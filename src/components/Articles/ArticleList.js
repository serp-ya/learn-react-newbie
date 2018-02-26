import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordeon from '../../decorators/accordeon';
import { connect } from 'react-redux';
import selectors from '../../selectors';
import { loadAllArticles } from '../../ActionCreators';

class ArticleList extends Component {

  static propTypes = {
      // from connect
      articles: PropTypes.array.isRequired,

      // from accordeon
      openItemId: PropTypes.string,
      toggleOpen: PropTypes.func
  };

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render() {
    const {articles, openItemId, toggleOpen} = this.props;
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
}

export default connect(state => (
  { articles: selectors.filterArticles(state) }
), { loadAllArticles })(accordeon(ArticleList));