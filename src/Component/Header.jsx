import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='white' expand='lg'>
                <Container>
                    <Navbar.Brand
                        href='#'
                        style={{ fontSize: '1.9rem', color: '#565387' }}>
                        Navbar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav
                            className='ms-auto my-2 my-lg-0 '
                            style={{ maxHeight: '100px', fontSize: '1.3rem' }}
                            navbarScroll>
                            <NavLink to='/' className='nav-link'>
                                Home
                            </NavLink>
                            <NavLink to='/about' className='nav-link'>
                                About
                            </NavLink>
                            <NavLink to='/services' className='nav-link'>
                                Services
                            </NavLink>
                            <NavLink to='/contact' className='nav-link'>
                                Conatct
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
