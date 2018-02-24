import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterSelectArticles} from '../../ActionCreators';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MultiSelect extends Component {
  changeSelection = (selection) => {
    this.props.filterSelectArticles(selection);
  };

  render() {
    const selection = this.props.filtersState.selectArticles;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options = {options}
        value = {selection}
        onChange = {this.changeSelection}
        multi
      />
    )
  }
}

export default connect((state) => (
  {filtersState: state.filtersState}
),
{filterSelectArticles})
(MultiSelect);


export function checkSelectedFilter(selectedArticles = [], currentArticle) {
  if(selectedArticles.length) {
    return selectedArticles.some(item => item.value === currentArticle.id);
  }

  return true;
}