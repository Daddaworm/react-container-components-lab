// Code MovieReviews Here
import React, { Component } from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './LatestMovieReviewsContainer'




function MovieReviews(props) {
    const reviews = props.reviews.map(review => {
        return (
            <div className='review' key={review.display_title}>
                <h2>Headline: {review.headline}</h2>
                {/* <img src={review.multimedia.src}/> */}
                <p>{review.summary_short}</p>
                <p>MPAA Rating: {review.mpaa_rating}</p>
                <h4>Written by: {review.byline}</h4>
            </div>
        )
        
    })
        return(
            <div className='review-list' >{reviews}</div>
    )
}
MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews