import React from 'react';
import { maleJeans } from '../../../data';
import Products from '../../Products/Products';
import { Container } from './MaleJeans.styles';

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
