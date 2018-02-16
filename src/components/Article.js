import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired
  };

  state = {
    isOpen: true
  };

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;
    const {comments} = article;
    return (
      <section>
        {article.text}
        <CommentsList comments={comments || []}/>
      </section>
    );
  }

  toggleOpen = (ev) => {
    ev.preventDefault();
    console.log('---', ev.nativeEvent);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}