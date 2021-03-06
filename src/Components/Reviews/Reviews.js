import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className=' container d-flex justify-content-around flex-wrap'>
            {
                reviews.map(review => <AllReviews key={review.id} review = {review}></AllReviews>)
            }
        </div>
    );
};

export default Reviews;