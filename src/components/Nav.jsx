import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Talento Tech 2025</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Galeria</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Navigation;