import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../../assets/images/tshirt.png'
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const customerReview = reviews.slice(0,3)

    return (
        <main className='container'>
            <div className='row'>
            <div className="col-md-8">
                <h1>Your <span className='text-color'> Desire </span></h1>
                <h1>Our <span className='text-color'> Destination</span></h1>
                <p>Our shop ready to give you the best experience to you.We provide best quality and cheap rate to all over the country.Your trust is our inspiration.</p>
                <button className='btn btn-primary'>Live Demo</button>
            </div>
            <div className="col-md-4">
                <img className='w-75' src={tshirt} alt="" />
            </div>
            
        </div>
        <div className='d-flex flex-column  align-items-center'>
            <div className='customer-review mt-4 row justify-content-around'>
                {
                    customerReview.map((review) => <CustomerReview key ={review.id} review = {review}></CustomerReview>)
                }

            </div>
            <div className='py-4'>
            <Link to='reviews' className='btn-review' >Customer Reviews</Link>
            </div>
        </div>
        </main>
    );
};

export default Home;