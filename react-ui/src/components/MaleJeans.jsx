import React from 'react';
import styled from 'styled-components';
import { maleJeans } from '../data';
import Products from './Products';

const Container = styled.div`

`;

const MaleJeans = () => {
    return (
        <React.Fragment>
            <Container>
                {maleJeans.map(product => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    )
}

export default MaleJeans;
