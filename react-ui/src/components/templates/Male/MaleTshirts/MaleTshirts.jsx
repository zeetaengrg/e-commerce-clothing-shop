import React from 'react';
import Products from '../../../elements/Products/Products';
import { maleTShirts } from '../../../../data';
import { Container } from './MaleTshirts.styles';

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