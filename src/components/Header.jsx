import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='bg-primary text-white py-4 shadpw-sm'>
            <Container>
                <h1 className='mb-1'>Proyecto Talento 2025</h1>
                <p className='lead'>Componentes React Friendly</p>
            </Container>
        </header>
    );
};

export default Header;