import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
`;

const Announcements = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders over $100!
        </Container>
    )
}

export default Announcements;
