import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import Calendar from './Calendar';
import MultiSelect from './MultiSelect';
import { mapToArr } from '../../helpers';

function Filters({ articles }) {
    return (
      <div>
        <Counter />
        <Calendar />
        <MultiSelect articles = {articles} />
      </div>
    );
}

export default connect(state => (
  { articles: mapToArr(state.articles.entities) }
))(Filters);