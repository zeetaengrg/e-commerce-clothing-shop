import React, { useState, useEffect } from 'react';
import { maleJeans } from '../../../../data';
import { Products } from '../../../elements'
import { Container } from './MaleJeans.styles';
import axios from "axios";

const MaleJeans = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async() => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
            } catch(err) {

            }
        }
        getProducts();
    }, [category]);

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
