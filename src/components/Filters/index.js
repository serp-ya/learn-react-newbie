import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import Calendar from './Calendar';
import MultiSelect from './MultiSelect';

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
  { articles: state.articles }
))(Filters);