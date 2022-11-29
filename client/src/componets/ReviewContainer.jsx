import React from 'react'
import Review from './Review'
import Styles from '../styles/reviewContainer.module.css'

function ReviewContainer({reviews}) {
  return (
    <div>
      { reviews.length ?
        <div className={Styles.container}>
            { reviews.map(({ rating, comment, createdAt}, i) => (
                <div key={i}>
                  <Review rating={rating} comment={comment} createdAt={createdAt}/>
                </div>
              ))}
        </div> :
        <div className={Styles.container}>
          <h2>This product has no reviews at the moment</h2>
        </div>
      }
    </div>
  )
}

export default ReviewContainer