import React from 'react';
import styled from 'styled-components';
import CategoryItems from './CategoryItems';
import { categories } from '../data';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Categories = () => {
    return (
        <>
            <Container>
                {categories.map(item => (
                    <CategoryItems item={item} />
                ))}
            </Container>   
        </>
    )
}

export default Categories;
