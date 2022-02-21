import React from 'react';
import { Container, Title, FilterContainer, Filter, FilterText, Select, Options } from '../Outfits.styles';
import { Announcements } from '../../../../components/elements';
import { MaleJackets } from '../../../../components/templates';
import { Navbar, Footer } from '../../../../components/layouts';

const Jeans = () => {
    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Title>
                    Men's Jackets
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
                            <Options>Levis</Options>
                            <Options>Denim</Options>
                            <Options>Diesel</Options>
                            <Options>Calvin Klein</Options>
                            <Options>Wrangler</Options>
                            <Options>Lee</Options>
                        </Select>
                    </Filter>
                </FilterContainer>
                <MaleJackets />
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Jeans;