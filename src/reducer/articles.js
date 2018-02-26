import {DELETE_ARTICLE, ADD_NEW_COMMENT, LOAD_ALL_ARTICLES} from '../typesConstants';
import { arrToMap } from '../helpers';

export default (articlesState = {}, action) => {
  const {type, payload, response, randomId} = action;

  switch (type) {
    case DELETE_ARTICLE:
      const tempState = {...articlesState};
      delete tempState[payload.id];
      return tempState;

    case ADD_NEW_COMMENT:
      const {articleId} = payload;
      const article = articlesState[articleId];

      return {
        ...articlesState,
        [articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    case LOAD_ALL_ARTICLES:
      return arrToMap(response)
  }

  return articlesState;
}