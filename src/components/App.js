import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Calendar from './Calendar';
import Counter from './Counter';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class App extends Component {

  state = {
    selection: null
  };

  render() {
    const { selection } = this.state;
    // TODO: прочитать в компоненте Select articles из стора
    // const options = this.props.articles.map(article => ({
    //   label: article.title,
    //   value: article.id
    // }));

    return (
      <div>
        <Counter />
        <Calendar />
        {/*<Select options = {options} value = {selection} onChange = {this.changeSelection} />*/}
        <ArticleList />
      </div>
    );
  }

  changeSelection = (selection) => this.setState({ selection });
}