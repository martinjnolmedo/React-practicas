import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Main = () => {
    return (
        <main className=''>
            <Container>
                <Row>
                    <Col>
                        <h1>Main Component</h1>
                        <p>This is the main content area.</p>
                        <Button variant="primary">Click Me</Button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;