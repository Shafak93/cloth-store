import React from 'react';
import tshirt from '../../assets/images/tshirt.png'

const Home = () => {
    return (
        <div className='container d-flex justify-content-center'>
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
    );
};

export default Home;