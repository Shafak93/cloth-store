import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import bootstrap from 'bootstrap';
import { Container } from 'react-bootstrap';


const Navbar = () => {
    return (
        <div >
            <nav className='nav-items'>
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='reviews'>Reviews</Link>
                <Link className='item' to='dashboard'>Dashboard</Link>
                <Link className='item' to='blogs'>Blogs</Link>
                <Link className='item' to='about'>About</Link>
            </nav>
        </div>
    );
};

export default Navbar;