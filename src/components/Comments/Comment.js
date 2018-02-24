import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect((state, ownProps) => {
  return {
    comment: state.comments.find(comment => comment.id === ownProps.id)
  };
})(Comment);