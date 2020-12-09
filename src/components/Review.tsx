import React from 'react'

const Review: React.FunctionComponent<any> = ({author, time, stars, body}) => {
  return(
    <div>
      <div>{author}</div>
      <div>{time}</div>
      <div>{stars} out of 5.0 stars</div>
      <p>{body}</p>
    </div>
  )
}

export default Review;