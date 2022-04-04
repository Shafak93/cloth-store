import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
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
                        <Nav.Link> <CustomLink className='item' to='/'>Home</CustomLink> </Nav.Link>
                        <Nav.Link ><CustomLink className='item' to='reviews'>Reviews</CustomLink></Nav.Link>
                        <Nav.Link > <CustomLink className='item' to='dashboard'>Dashboard</CustomLink></Nav.Link>
                        <Nav.Link > <CustomLink className='item' to='blogs'>Blogs</CustomLink></Nav.Link>
                        <Nav.Link ><CustomLink className='item' to='about'>About</CustomLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </nav>
        </div>
        
    );
};

export default Navigation;