import React from 'react';

const AllReviews = (props) => {
    const {name, reviewText, rating } = props.review
    return (
        <div className='col-md-4 d-flex flex-column align-items-center'>
           <h1>{name}</h1>
           <p>Review: {reviewText}</p>
           <p>Rating:{rating}</p>
        </div>
    );
};

export default AllReviews;