import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../typesConstants';

const articlesMap = defaultArticles.reduce((result, article) => {
  result[article.id] = article;
  return result;
}, {});

export default (articlesState = articlesMap, action) => {
  const {type, payload} = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id);
  }

  return articlesState;
}