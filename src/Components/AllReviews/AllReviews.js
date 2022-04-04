import React from 'react';
import './AllReviews.css';

const AllReviews = (props) => {
    const {name, reviewText, rating } = props.review
    return (
        <div className='review col-md-4 mb-4 me-1'>
           <div className='review-body d-flex flex-column align-items-center'>
                <h4>{name}</h4>
                <p>{reviewText}</p>
                <p>Rating:{rating}</p>
           </div>
        </div>
    );
};

export default AllReviews;