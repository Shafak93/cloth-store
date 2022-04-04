import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../../assets/images/tshirt.png'
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const customerReview = reviews.slice(0,3)
    // console.log(customerReview)

    return (
        <main className='container'>
            <div className=' d-flex justify-content-space-between row'>
            <div className="col-md-8">
                <h1>Your Desire</h1>
                <h1>Our Destination</h1>
                <p>Our shop ready to give you the best experience to you.We provide best quality and cheap rate to all over the country.Your trust is our inspiration.</p>
                <button className='btn btn-primary'>Live Demo</button>
            </div>
            <div className="col-md-4">
                <img className='w-50' src={tshirt} alt="" />
            </div>
            
        </div>
        <div className='mt-4 row'>
            {
                customerReview.map((review) => <CustomerReview key ={review.id} review = {review}></CustomerReview>)
            }

        </div>
        <Link to='reviews' >Customer Reviews</Link>
        </main>
    );
};

export default Home;