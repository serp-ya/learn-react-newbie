import {FILTER_SELECT_ARTICLE} from '../typesConstants';
import {FILTER_DATE_ARTICLE} from '../typesConstants';

export default (filtersState = {selectArticles: [], dateArticles: {}}, action) => {
  const {type, payload} = action;
  const newFilterState = Object.assign({}, filtersState);

  switch (type) {
    case FILTER_SELECT_ARTICLE:
      newFilterState.selectArticles = [...payload.selectArticles];
      return newFilterState;

    case FILTER_DATE_ARTICLE:
      newFilterState.dateArticles = Object.assign({}, payload.dateArticles);
      return newFilterState;
  }

  return filtersState;
}