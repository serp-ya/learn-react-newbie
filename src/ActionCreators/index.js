import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_DATE_ARTICLE,
  FILTER_SELECT_ARTICLE,
  ADD_NEW_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START, FAIL, SUCCESS
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

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    });

    fetch(`/api/article/${id}`)
      .then(res => res.json())
      .then(response => dispatch({
        type: LOAD_ARTICLE + SUCCESS,
        payload: { id, response }
      }))
      .catch(error => dispatch({
        type: LOAD_ARTICLE + FAIL,
        payload: { id, error }
      }))
  }
}