import React from 'react';
import notfound from '../../assets/images/notfound.png'

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <img className='w-50 rounded' src={notfound} alt="" />
            <h2>The page you search is not found</h2>
        </div>
    );
};

export default NotFound;