import React, { useEffect, useState } from 'react';
import tshirt from '../../assets/images/tshirt.png'
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    const [reviews, setReviews] = useState([])
    
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    return (
        <main className='container'>
            <div className=' d-flex justify-content-center'>
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
                reviews.map((review) => <CustomerReview key ={review.id} review = {review}></CustomerReview>)
            }
        </div>
        </main>
    );
};

export default Home;