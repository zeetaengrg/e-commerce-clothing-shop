import React from 'react';
import { maleJackets } from '../../../../data';
import { Products } from '../../../elements'
import { Container } from './MaleJackets.styles';

const MaleJackets = ({ category, filters, sort }) => {
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