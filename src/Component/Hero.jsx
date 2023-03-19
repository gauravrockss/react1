import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Images from './Images';
import { NavLink } from 'react-router-dom';

const Hero = props => {
    const { title, button, link, img } = props;
    return (
        <>
            <section
                id='hero'
                className='mt-5 d-flex align-items-center mt-5 h-100 w-100'>
                <Container>
                    <Row className='mx-auto '>
                        <Col lg={6} md={12}>
                            <div className=' p-5 p-lg-0 d-flex justify-content-center flex-column mt-5'>
                                <h1
                                    style={{
                                        fontSize: 'clamp(30px,5vw,45px)',
                                        fontWeight: '600',
                                    }}>
                                    {title}{' '}
                                    <strong
                                        className='brand-name'
                                        style={{ color: '#3498db' }}>
                                        New Technology
                                    </strong>
                                </h1>
                                <p
                                    className='my-3'
                                    style={{ fontSize: '20px' }}>
                                    We are the team of talented developer making
                                    websites
                                </p>
                                <div>
                                    <NavLink
                                        to={link}
                                        className='main-button btn'>
                                        {button}
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='mb-4'>
                            <Images name={img} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;
