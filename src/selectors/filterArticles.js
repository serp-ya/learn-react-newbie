import { createSelector } from 'reselect';
import { checkSelectedFilter } from '../components/Filters/MultiSelect';
import { checkDateFilter } from '../components/Filters/Calendar';
import { mapToArr } from '../helpers';

const filtersGetter = state => state.filtersState;
const articleGetter = state => state.articles.entities;

export default createSelector(filtersGetter, articleGetter, (filters, articles) => {
  const {selectArticles, dateArticles} = filters;
  console.log('kek')

  return mapToArr(articles).reduce((result, article) => {
    if (checkSelectedFilter(selectArticles, article) && checkDateFilter(dateArticles, article)) {
      return [...result, article];
    }

    return result;
  }, []);
});