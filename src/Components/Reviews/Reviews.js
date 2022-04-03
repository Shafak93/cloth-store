import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Reviews;