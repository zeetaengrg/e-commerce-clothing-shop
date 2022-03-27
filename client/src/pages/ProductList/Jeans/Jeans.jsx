import React, { useState } from "react";
import {
    Container,
    Title,
    FilterContainer,
    Filter,
    FilterText,
    Select,
    Options,
} from "../Outfits.styles";
import { Announcements } from "../../../components/elements";
import { Navbar, Footer } from "../../../components/templates";
import { MaleJeans } from "../../../components/layouts";
import { useLocation } from "react-router-dom";

const Jeans = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    const colorList = ["Grey", "Blue", "Brown", "White"];

    const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];

    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Title>{category}</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter By:</FilterText>
                        <Select name="color" onChange={handleFilters}>
                            <Options disabled selected>
                                Color
                            </Options>
                            {colorList.map((item) => {
                                return <Options key={item}>{item}</Options>;
                            })}
                        </Select>
                        <Select name="size" onChange={handleFilters}>
                            <Options disabled selected>
                                Size
                            </Options>
                            {sizeList.map((size) => {
                                return <Options key={size}>{size}</Options>;
                            })}
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort By:</FilterText>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            <Options value="newest">Newest</Options>
                            <Options value="lowToHigh">
                                Price: Low to High
                            </Options>
                            <Options value="highToLow">
                                Price: High to Low
                            </Options>
                        </Select>
                    </Filter>
                </FilterContainer>
                <MaleJeans category={category} filters={filters} sort={sort} />
                <Footer />
            </Container>
        </React.Fragment>
    );
};

export default Jeans;
