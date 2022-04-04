import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomerReview = (props) => {
    const {name, reviewText, rating } = props.review
    return (
        <div>

            <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>{name}</h3>
                    <p>{reviewText}</p>
                    <p>Rating: {rating} </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

           {/* <h1>{name}</h1>
           <p>Review: {reviewText}</p>
           <p>Rating:{rating}</p> */}
        </div>
    );
};

export default CustomerReview;