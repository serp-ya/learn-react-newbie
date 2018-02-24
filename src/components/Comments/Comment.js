import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectors from '../../selectors';

Comment.propTypes = {
  id: PropTypes.string.isRequired,

  // from connect
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string
  })
};

function Comment({comment}) {
  return (
    <div>
      <h5>{comment.user}</h5>
      <p>{comment.text}</p>
    </div>
  )
}

const mapStateToProps = () => {
  const commentSelector = selectors.commentSelectorFactory();

  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    };
  }
};

export default connect(mapStateToProps)(Comment);