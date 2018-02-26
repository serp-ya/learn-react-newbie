import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Loader from '../Loader';
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
    const { loaded, loading, loadAllArticles } = this.props;

    if (!loaded || !loading) {
      loadAllArticles();
    }
  }

  render() {
    const {articles, openItemId, toggleOpen, loading} = this.props;

    if (loading) {
      return <Loader />
    }

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
  {
    articles: selectors.filterArticles(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  }
), { loadAllArticles })(accordeon(ArticleList));