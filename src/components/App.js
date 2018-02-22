import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Calendar from './Calendar';
import Counter from './Counter';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class App extends Component {
  // static propTypes = {
  //
  // };

  state = {
    selection: null
  };

  render() {
    const { selection } = this.state;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <div>
        <Counter />
        <Calendar />
        <Select options = {options} value = {selection} onChange = {this.changeSelection} />
        <ArticleList articles = { this.props.articles }/>
      </div>
    );
  }

  changeSelection = (selection) => this.setState({ selection });
}