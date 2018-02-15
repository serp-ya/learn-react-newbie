import React from 'react'
import Comment from './Comment'

export default function CommentsList({comments}) {
  const commentsList = comments.map(
    comment => <Comment key={comment.id} comment={comment} />
  );

  return <ul>{commentsList}</ul>
}