import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
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

export default Comment;