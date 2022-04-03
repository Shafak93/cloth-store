import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css'


const Navbar = () => {
    return (
        <div className='container d-flex justify-content-center ' >
 
            <nav className='nav-items p-4'>
                <Link className='item m-3' to='/'>Home</Link>
                <Link className='item' to='reviews'>Reviews</Link>
                <Link className='item' to='dashboard'>Dashboard</Link>
                <Link className='item' to='blogs'>Blogs</Link>
                <Link className='item' to='about'>About</Link>
            </nav>
        </div>
    );
};

export default Navbar;