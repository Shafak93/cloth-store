import React from 'react';

const CustomerReview = (props) => {
    const {name, reviewText, rating } = props.review
    return (
        <div className='col-md-4'>
           <h1>{name}</h1>
           <p>Review: {reviewText}</p>
           <p>Rating:{rating}</p>
        </div>
    );
};

export default CustomerReview;