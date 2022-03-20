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
import { Announcements } from "../../../../components/elements";
import { MaleJeans } from "../../../../components/templates";
import { Navbar, Footer } from "../../../../components/layouts";
import { useLocation } from "react-router-dom";

const Jeans = () => {
	const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("Newest")
	
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
			...filters,
      [e.target.name]: value,
    });
  };

  const colorList = ["Red", "Blue", "Green", "Black", "White", "Yellow"];

  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];

  const priceList = [
    "$0 - $100",
    "$100 - $200",
    "$200 - $300",
    "$300 - $400",
    "$400 - $500",
  ];

  const brandList = [
    "Levis",
    "Denim",
    "Diesel",
    "Calvin Klein",
    "Wrangler",
    "Lee",
  ];

  return (
    <React.Fragment>
      <Container>
        <Announcements />
        <Navbar />
        <Title>Men's Jeans</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter By:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Options disabled>Color</Options>
              {colorList.map((item) => {
                return <Options key={item}>{item}</Options>;
              })}
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Options disabled>Size</Options>
              {sizeList.map((size) => {
                return <Options key={size}>{size}</Options>;
              })}
            </Select>
            <Select name="price" onChange={handleFilters}>
              <Options disabled>Price</Options>
              {priceList.map((price) => {
                return <Options key={price}>{price}</Options>;
              })}
            </Select>
            <Select name="brand" onChange={handleFilters}>
              <Options disabled>Brand</Options>
              {brandList.map((brand) => {
                return <Options key={brand}>{brand}</Options>;
              })}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort By:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
							<Options value="newest">Newest</Options>
							<Options value="oldest">Oldest</Options>
							<Options value="priceLowToHigh">Price: Low to High</Options>
							<Options value="priceHighToLow">Price: High to Low</Options>
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