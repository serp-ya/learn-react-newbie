import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MultiSelect extends Component {
  state = {
    selection: null
  };

  changeSelection = (selection) => this.setState({ selection });

  render() {
    const { selection } = this.state;
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

export default MultiSelect;