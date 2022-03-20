import React from 'react';
import { Products } from '../../../elements'
import { maleSuits } from '../../../../data';
import { Container } from './MaleSuits.styles';

const MaleSuits = ({ category, filters, sort }) => {
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
