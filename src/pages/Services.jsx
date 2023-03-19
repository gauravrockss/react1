import React from 'react';

import Card from './../Component/Card';
import Details from '../Services/Details';
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <>
            <div className='my-5 text-center'>
                <h1>Our Services</h1>
            </div>
            <Container className='my-5'>
                <Row className='gy-4'>
                    {Details.map((detail, ind) => {
                        return (
                            <Card
                                key={ind}
                                title={detail.title}
                                img={detail.img}
                                content={detail.content}
                            />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Services;
