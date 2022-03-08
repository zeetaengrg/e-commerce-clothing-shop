import React, { useState } from 'react';
import { Container, Title, FilterContainer, Filter, FilterText, Select, Options } from '../Outfits.styles';
import { Announcements } from '../../../../components/elements';
import { MaleJeans } from '../../../../components/templates';
import { Navbar, Footer } from '../../../../components/layouts';
import { useLocation } from 'react-router-dom';

const Jeans = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filter, setFilter] = useState({});

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            [e.target.name]: value,
        })
    }
    console.log(filter);

    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Title>
                    Men's Jeans
                </Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>
                            Filter Products:
                        </FilterText>
                        <Select name="color" onChange={handleFilter}>
                            <Options disabled>Color</Options>
                            <Options>Red</Options>
                            <Options>Blue</Options>
                            <Options>Green</Options>
                            <Options>Black</Options>
                            <Options>White</Options>
                            <Options>Yellow</Options>
                        </Select>
                        <Select name="size" onChange={handleFilter}>
                            <Options disabled>Size</Options>
                            <Options>XS</Options>
                            <Options>S</Options>
                            <Options>M</Options>
                            <Options>L</Options>
                            <Options>XL</Options>
                            <Options>XXL</Options>
                        </Select>
                        <Select name="price" onChange={handleFilter}>
                            <Options disabled>Price</Options>
                            <Options>$0 - $50</Options>
                            <Options>$50 - $100</Options>
                            <Options>$100 - $150</Options>
                            <Options>$150 - $200</Options>
                            <Options>$200 - $250</Options>
                            <Options>$250 - $300</Options>
                        </Select>
                        <Select name="brand" onChange={handleFilter}>
                            <Options disabled>Brand</Options>
                            <Options>Levis</Options>
                            <Options>Denim</Options>
                            <Options>Diesel</Options>
                            <Options>Calvin Klein</Options>
                            <Options>Wrangler</Options>
                            <Options>Lee</Options>
                        </Select>
                    </Filter>
                </FilterContainer>
                <MaleJeans />
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Jeans;