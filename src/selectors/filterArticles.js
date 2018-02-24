import { createSelector } from 'reselect';
import { checkSelectedFilter } from '../components/Filters/MultiSelect';
import { checkDateFilter } from '../components/Filters/Calendar';

const filtersGetter = state => state.filtersState;
const articleGetter = state => state.articles;

export default createSelector(filtersGetter, articleGetter, (filters, articles) => {
  const {selectArticles, dateArticles} = filters;
  return articles.filter(article => {
    return checkSelectedFilter(selectArticles, article) && checkDateFilter(dateArticles, article);
  });
});