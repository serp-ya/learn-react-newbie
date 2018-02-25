import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_NEW_COMMENT } from '../typesConstants';

const articlesMap = defaultArticles.reduce((result, article) => {
  result[article.id] = article;
  return result;
}, {});

export default (articlesState = articlesMap, action) => {
  const {type, payload} = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id);

    case ADD_NEW_COMMENT:
      const { articleId, newCommentId } = payload;
      const newState = {...articlesState};
      const newStateArticle = newState[articleId];
      newStateArticle.comments = newStateArticle.comments ? [...newStateArticle.comments, newCommentId] : [newCommentId];
      return newState;
  }

  return articlesState;
}