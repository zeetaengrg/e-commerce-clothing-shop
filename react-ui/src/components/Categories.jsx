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
        <React.Fragment>
            <Container>
                {categories.map(item => (
                    <CategoryItems item={item} />
                ))}
            </Container>   
        </React.Fragment>
    )
}

export default Categories;
