import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import MaleJackets from '../components/MaleJackets';
import MaleJeans from '../components/MaleJeans';
import MaleTshirts from '../components/MaleTshirts';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 1rem;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`;

const Filter = styled.div`

`;

const ProductList = () => {
    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Title>
                    Jeans
                </Title>
                <FilterContainer>
                    <Filter>Filter</Filter>
                </FilterContainer>
                {/* <MaleJeans /> */}
                {/* <MaleJackets /> */}
                <MaleTshirts />
            </Container>
        </React.Fragment>
    )
}

export default ProductList;
