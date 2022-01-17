import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import MaleJackets from '../components/MaleJackets';
import MaleJeans from '../components/MaleJeans';
import MaleSuits from '../components/MaleSuits';
import MaleTshirts from '../components/MaleTshirts';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const Container = styled.div`

`;

const Title = styled.h1`
    padding: 1rem;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const Filter = styled.div`

`;

const FilterText = styled.span`
    margin-right: 1rem;
`;

const Select = styled.select`
    margin-right: 1rem;
`;

const Options = styled.option`

`;

const ProductList = () => {
    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Title>
                    Men's Suit
                </Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>
                            Filter Products:
                        </FilterText>
                        <Select>
                            <Options disabled selected>Color</Options>
                            <Options>Red</Options>
                            <Options>Blue</Options>
                            <Options>Green</Options>
                            <Options>Black</Options>
                            <Options>White</Options>
                            <Options>Yellow</Options>
                        </Select>
                        <Select>
                            <Options disabled selected>Size</Options>
                            <Options>XS</Options>
                            <Options>S</Options>
                            <Options>M</Options>
                            <Options>L</Options>
                            <Options>XL</Options>
                            <Options>XXL</Options>
                        </Select>
                        <Select>
                            <Options disabled selected>Price</Options>
                            <Options>$0 - $50</Options>
                            <Options>$50 - $100</Options>
                            <Options>$100 - $150</Options>
                            <Options>$150 - $200</Options>
                            <Options>$200 - $250</Options>
                            <Options>$250 - $300</Options>
                        </Select>
                        <Select>
                            <Options disabled selected>Brand</Options>
                            <Options>Adidas</Options>
                            <Options>Nike</Options>
                            <Options>Puma</Options>
                            <Options>Reebok</Options>
                            <Options>Vans</Options>
                        </Select>
                    </Filter>
                </FilterContainer>
                {/* <MaleJeans /> */}
                {/* <MaleJackets /> */}
                {/* <MaleTshirts /> */}
                <MaleSuits />
                <FooterSection />
            </Container>
        </React.Fragment>
    )
}

export default ProductList;
