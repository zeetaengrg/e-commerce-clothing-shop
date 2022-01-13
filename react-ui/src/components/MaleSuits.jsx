import React from 'react';
import styled from 'styled-components';
import { maleSuits } from '../data';
import Products from './Products';

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

const MaleSuits = () => {
    return (
        <React.Fragment>
            <Container>
                {maleSuits.map(product => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    )
}

export default MaleSuits;
