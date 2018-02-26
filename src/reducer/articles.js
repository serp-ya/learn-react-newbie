import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_NEW_COMMENT } from '../typesConstants';
import { arrToMap } from '../helpers';

const articlesMap = arrToMap(defaultArticles);

export default (articlesState = articlesMap, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
      case DELETE_ARTICLE:
      const tempState = {...articlesState};
      delete tempState[payload.id];
      return tempState;

      case ADD_NEW_COMMENT:
        const { articleId } = payload;
        const article = articlesState[articleId];

        return {
          ...articlesState,
          [articleId]: {
            ...article,
            comments: (article.comments || []).concat(randomId)
          }
        }
  }

  return articlesState;
}