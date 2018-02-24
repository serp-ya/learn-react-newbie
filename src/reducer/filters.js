import { FILTER_SELECT_ARTICLE, FILTER_DATE_ARTICLE, DELETE_ARTICLE } from '../typesConstants';

const defaultFilters = {
  selectArticles: [],
  dateArticles: {
    from: undefined,
    to: undefined
  }
};

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_SELECT_ARTICLE:
      return {...filtersState, selectArticles: payload.selectArticles};

    case FILTER_DATE_ARTICLE:
      const newstate = {...filtersState};
      newstate.dateArticles = Object.assign({...newstate.dateArticles}, payload.dateArticles);
      return newstate;

    case DELETE_ARTICLE:
      return {...filtersState, selectArticles: filtersState.selectArticles.filter(article => article.value !== payload.id)}
  }

  return filtersState;
}