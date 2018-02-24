import { FILTER_SELECT_ARTICLE, FILTER_DATE_ARTICLE, DELETE_ARTICLE } from '../typesConstants';

const defaultFilters = {
  selectArticles: [],
  dateArticles: {
    from: null,
    to: null
  }
};

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_SELECT_ARTICLE:
      return {...filtersState, selectArticles: payload.selectArticles};

    case FILTER_DATE_ARTICLE:
      return {...filtersState, dateArticles: payload.dateArticles};
  }

  return filtersState;
}