import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import { maleTShirts } from '../data';

const Container = styled.div`

`;

const MaleTshirts = () => {
    return (
        <React.Fragment>
            <Container>
                {maleTShirts.map(product => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    )
}

export default MaleTshirts;