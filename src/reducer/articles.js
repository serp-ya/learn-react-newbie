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
        const article = articlesState[articleId];

        return {
          ...articlesState,
          [articleId]: {
            ...article,
            comments: (article.comments || []).concat(newCommentId)
          }
        }
  }

  return articlesState;
}