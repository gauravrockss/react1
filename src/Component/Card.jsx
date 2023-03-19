import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Images from './Images';
const SCard = props => {
    const { title, img, content } = props;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <Card className=''>
                    <Images name={img} variant='top' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{content}</Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SCard;
