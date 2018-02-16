import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentsList extends Component {
  static defaultProps = {
    comments: []
  };

  static propTypes = {
    comments: PropTypes.array
  };

  state = {
    isOpen: false
  };

  render() {
    const {isOpen} = this.state;

    return (
      <div>
        <button onClick={this.toggleComments}>
          {isOpen ? 'Close comments' : 'Show comments'}
        </button>
        {isOpen ? this.getCommentsList() : null}
      </div>
    )
  };

  getCommentsList() {
    const {comments} = this.props;

    if (!comments.length) {
      return <p>Have no any comments</p>
    }

    return (
      <ul>
        {comments.map( comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    )
  };

  toggleComments = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
}