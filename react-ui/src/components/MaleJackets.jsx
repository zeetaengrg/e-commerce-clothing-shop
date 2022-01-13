import React from 'react';
import styled from 'styled-components';
import { maleJackets } from '../data';
import Products from './Products';

const Container = styled.div`

`;

const MaleJackets = () => {
    return (
        <React.Fragment>
            <Container>
                {maleJackets.map(product => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    )
}

export default MaleJackets;
