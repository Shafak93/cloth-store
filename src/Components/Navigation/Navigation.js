import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='container'>
            <nav className='nav-items pb-4'>
            <Navbar bg="light" expand="lg">
                <Container>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link className='item' to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className='item' to='reviews'>Reviews</Link></Nav.Link>
                        <Nav.Link > <Link className='item' to='dashboard'>Dashboard</Link></Nav.Link>
                        <Nav.Link > <Link className='item' to='blogs'>Blogs</Link></Nav.Link>
                        <Nav.Link ><Link className='item' to='about'>About</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </nav>
        </div>
        
    );
};

export default Navigation;