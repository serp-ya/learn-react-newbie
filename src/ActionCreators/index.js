import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_DATE_ARTICLE,
  FILTER_SELECT_ARTICLE,
  ADD_NEW_COMMENT
} from '../typesConstants';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  };
}

export function filterDateArticles(dateArticles) {
  return {
    type: FILTER_DATE_ARTICLE,
    payload: {dateArticles}
  };
}

export function filterSelectArticles(selectArticles) {
  return {
    type: FILTER_SELECT_ARTICLE,
    payload: {selectArticles}
  };
}

export function addNewComment(articleId, user, text) {
  return {
    type: ADD_NEW_COMMENT,
    payload: {articleId, user, text},
    generateId: true
  };
}