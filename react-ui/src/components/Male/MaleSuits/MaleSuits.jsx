import React from 'react';
import { maleSuits } from '../../../data';
import Products from '../../Products/Products';
import { Container } from './MaleSuits.styles';

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
