import {DELETE_ARTICLE, ADD_NEW_COMMENT, LOAD_ALL_ARTICLES} from '../typesConstants';
import { arrToMap } from '../helpers';
import { OrderedMap, Record } from 'immutable';

const ArticleRecord = new Record({
  text: '',
  title: '',
  id: '',
  comments: []
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articlesState = defaultState, action) => {
  const {type, payload, response, randomId} = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.deleteIn(['entities', payload.id]);

    case ADD_NEW_COMMENT:
      return articlesState.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => comments.concat(randomId)
      );

    case LOAD_ALL_ARTICLES:
      return articlesState.set('entities', arrToMap(response, ArticleRecord));
  }

  return articlesState;
}