import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CustomerReview.css'

const CustomerReview = (props) => {
    const {name, reviewText, rating } = props.review
    return (
            <div className=' review d-flex flex-column align-items-center w-25'>
           <div className='review-body'>
                <h4>{name}</h4>
                <p>{reviewText}</p>
                <p>Rating:{rating}</p>
           </div>
        </div>
        
    );
};

export default CustomerReview;