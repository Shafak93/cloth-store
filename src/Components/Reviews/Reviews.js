import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews/AllReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='row mx-4'>
            {
                reviews.map(review => <AllReviews key={review.id} review = {review}></AllReviews>)
            }
        </div>
    );
};

export default Reviews;